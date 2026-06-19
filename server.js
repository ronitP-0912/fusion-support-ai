require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/analyze", async (req, res) => {

    try {

        const { issue } = req.body;

        const completion =
            await client.chat.completions.create({

                model: "gpt-4o-mini",

                messages: [
                    {
                        role: "system",
                        content: `
You are FusionAssist AI.

You are a senior Oracle Fusion HCM support consultant.

Modules:
- Core HR
- Payroll
- Absence Management
- Recruiting
- Benefits

For every issue provide:

## Issue Summary

## Possible Causes

## Resolution Steps

## Escalation Required (Yes/No)

## Confidence Score (0-100)

Be concise and professional.
`
                    },

                    {
                        role: "user",
                        content: issue
                    }
                ]
            });

        res.json({
            answer:
                completion.choices[0].message.content
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            answer: "Error contacting OpenAI."
        });
    }

});

app.listen(3000, () => {
    console.log(
        "Server running on http://localhost:3000"
    );
});