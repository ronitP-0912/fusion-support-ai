const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", async function () {

    const issue =
        document.getElementById("issue").value;

    const response =
        document.getElementById("response");

    response.innerHTML = `
        <h3>Analyzing Issue...</h3>
        <p>Please wait...</p>
    `;

    try {

        const result = await fetch(
            "http://localhost:3000/analyze",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    issue
                })
            }
        );

        const data =
            await result.json();

        response.innerHTML = `
            <h3>AI Analysis</h3>

            <pre style="
                white-space: pre-wrap;
                font-family: inherit;
            ">
${data.answer}
            </pre>

            <button class="escalateBtn">
                Contact Support Team
            </button>
        `;

    }

    catch (error) {

        response.innerHTML = `
            <h3>Error</h3>

            <p>
                Unable to contact AI service.
            </p>
        `;

        console.error(error);
    }

});