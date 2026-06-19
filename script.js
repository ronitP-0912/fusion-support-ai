const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", function () {

    const issue =
        document.getElementById("issue").value.toLowerCase();

    const response =
        document.getElementById("response");

    response.innerHTML = `
        <h3>Analyzing Issue...</h3>
        <p>Please wait...</p>
    `;

    setTimeout(() => {

        let result = "";

        if(issue.includes("payroll")){

            result = `
            <h3>Issue Summary</h3>
            <p>Payroll process failure detected.</p>

            <h3>Possible Causes</h3>
            <ul>
                <li>Missing payroll parameters</li>
                <li>Employee validation error</li>
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

            <button class="escalateBtn">
                Contact Support Team
            </button>
            `;

        }

        else if(issue.includes("leave")){

            result = `
            <h3>Issue Summary</h3>
            <p>Leave request submission issue detected.</p>

            <h3>Possible Causes</h3>
            <ul>
                <li>Leave type not assigned</li>
                <li>Insufficient balance</li>
                <li>Approval workflow issue</li>
            </ul>

            <h3>Resolution Steps</h3>
            <ol>
                <li>Check leave balances</li>
                <li>Verify leave eligibility</li>
                <li>Review approval rules</li>
            </ol>

            <h3>Confidence Score</h3>
            <p>88%</p>

            <button class="escalateBtn">
                Contact Support Team
            </button>
            `;
        }

        else if(issue.includes("role")
            || issue.includes("access")
            || issue.includes("permission")){

            result = `
            <h3>Issue Summary</h3>
            <p>Security role issue detected.</p>

            <h3>Possible Causes</h3>
            <ul>
                <li>Missing role assignment</li>
                <li>Data access restriction</li>
                <li>Expired user privileges</li>
            </ul>

            <h3>Resolution Steps</h3>
            <ol>
                <li>Review user roles</li>
                <li>Check data access settings</li>
                <li>Reassign required role</li>
            </ol>

            <h3>Confidence Score</h3>
            <p>91%</p>

            <button class="escalateBtn">
                Contact Support Team
            </button>
            `;
        }

        else{

            result = `
            <h3>Issue Summary</h3>
            <p>Issue captured successfully.</p>

            <h3>AI Assessment</h3>
            <p>
                Additional information is required
                to determine the root cause.
            </p>

            <h3>Confidence Score</h3>
            <p>40%</p>

            <button class="escalateBtn">
                Contact Support Team
            </button>
            `;
        }

        response.innerHTML = result;

    }, 2000);

});