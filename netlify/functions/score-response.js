/**
 * Netlify function: score-response
 * Evaluates a student response against an I Can statement using Claude
 * Called from: content-learning-review.html
 * Uses Claude API via fetch (no SDK dependency needed)
 */

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  try {
    const { response, iCanStatement, assignmentName } = JSON.parse(event.body);

    if (!response || !iCanStatement) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing response or I Can statement" }),
      };
    }

    const prompt = `You are evaluating a student's work for a science learning objective.

**Learning Objective (I Can Statement):**
${iCanStatement}

**Assignment:** ${assignmentName || "Learning check"}

**Student Response:**
${response}

---

Evaluate this response. Consider:
- Does it demonstrate understanding of the learning objective?
- Is the answer accurate/complete?
- Does it show effort and creativity (bonus, don't penalize straightforward answers)?
- Are there gaps or misconceptions?

Provide your assessment in this exact format:

PROFICIENCY: [Developing / Proficient / Advanced]

FEEDBACK:
[2-3 sentences explaining your assessment. Start with what the student did well, then note any gaps or areas to strengthen. Be encouraging.]

PROFICIENCY and FEEDBACK must be on separate lines as shown.`;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "ANTHROPIC_API_KEY not configured" }),
      };
    }

    const messageRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-opus-4-7",
        max_tokens: 300,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!messageRes.ok) {
      throw new Error(`Claude API error: ${messageRes.statusText}`);
    }

    const messageData = await messageRes.json();
    const text = messageData.content[0]?.text || "";

    // Parse response
    const proficiencyMatch = text.match(/PROFICIENCY:\s*(Developing|Proficient|Advanced)/);
    const feedbackMatch = text.match(/FEEDBACK:\n([\s\S]*?)$/);

    const proficiency = proficiencyMatch ? proficiencyMatch[1] : "Developing";
    const feedback = feedbackMatch ? feedbackMatch[1].trim() : text;

    return {
      statusCode: 200,
      body: JSON.stringify({
        proficiency,
        feedback,
      }),
    };
  } catch (error) {
    console.error("Scoring error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
