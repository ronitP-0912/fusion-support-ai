const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", function () {

    const issue = document.getElementById("issue").value.toLowerCase();
    const module = document.getElementById("module").value;
    const response = document.getElementById("response");

    let result = "";

    if(issue.includes("payroll")){

        result = `
        <h3>Issue Summary</h3>

        <p>Payroll process failure detected.</p>

        <h3>Possible Causes</h3>

        <ul>
            <li>Missing payroll parameters</li>
            <li>Employee data validation error</li>
            <li>Payroll flow not configured</li>
        </ul>

        <h3>Resolution Steps</h3>

        <ol>
            <li>Navigate to Payroll Checklist</li>
            <li>Review process logs</li>
            <li>Validate payroll parameters</li>
            <li>Rerun payroll process</li>
        </ol>

        <h3>Confidence Score</h3>

        <p>85%</p>
        `;

    } else {

        result = `
        <h3>Issue Summary</h3>

        <p>Issue captured successfully.</p>

        <p>AI analysis will be available shortly.</p>
        `;
    }

    response.innerHTML = result;

});