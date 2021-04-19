//adding the onclick function the button to calculate the 3 values (total principal, total interest, and total cost) when you enter in the form

document.getElementById("calculateBtn").onclick = function () {
    let amount = document.getElementById("loanAmount").value;
    let months = document.getElementById("months").value;
    let rate = document.getElementById("rate").value;

    //parseInt the loan amount bc it would read NaN(not a number)
    amount = parseInt(amount);
    document.getElementById("principalAmount").innerHTML = `$${amount}`;

    //created the first formula of total monthly payment (use math.pow to create exponent)
    //toFixed(2) displays the number to 2 decimal places
    let rowData = "";
    let totalMonthlyPayment = (amount) * (rate / 1200) / (1 - (Math.pow(1 + rate / 1200, -months)));
    totalMonthlyPayment = totalMonthlyPayment;
    document.getElementById("getMonthlyPayment").innerHTML = `$${totalMonthlyPayment}`;
    let totalLoanAmount = months * totalMonthlyPayment;

    totalLoanAmount = totalLoanAmount;

    //adding the dollar sign to the numbers
    document.getElementById("totalCost").innerHTML = `$${totalLoanAmount}`;


    let interest = totalLoanAmount - amount;
    interest = interest;
    document.getElementById("totalInterest").innerHTML = `$${interest}`;

    let interestPayment = totalLoanAmount * rate / 1200;
    let principalPayment = totalMonthlyPayment - interestPayment;
    let remainingBalance = totalLoanAmount - totalMonthlyPayment;


    //adds the content to the table
    const dataTemplate = document.getElementById("data-template");
    const resultsBody = document.getElementById("resultsBody");

    //currentBalance variable and interestSum is created to allow the number to change throughout the table
    resultsBody.innerHTML = "";
    let currentBalance = amount;
    let interestSum = 0;

    //for loop to reiterate over the number of months entered in the form
    //i=1 bc thats when the table should start
    //calculations and formulas are created to make sure that the numbers are changing after every month
    for (let i = 1; i <= months; i++) {
        const dataRow = document.importNode(dataTemplate.content, true);
        let interestPayment = currentBalance * rate / 1200;
        let principalPayment = totalMonthlyPayment - interestPayment;
        let remainingBalance = currentBalance - principalPayment;
        currentBalance = currentBalance - principalPayment;
        interestSum = interestPayment + interestSum;

        //adding the table rows to the table by using the dataRow.getElementById and referring back the the ids named in the html
        dataRow.getElementById("month").textContent = i;
        dataRow.getElementById("payment").textContent = totalMonthlyPayment;
        dataRow.getElementById("principal").textContent = principalPayment.toFixed(2);
        dataRow.getElementById("interest").textContent = interestPayment.toFixed(2);
        dataRow.getElementById("totalInterest").textContent = interestSum.toFixed(2);
        dataRow.getElementById("balance").textContent = remainingBalance.toFixed(2);

        resultsBody.appendChild(dataRow);

    }

}

// HOW TO ADD COMMAS
// number.toLocaleString(undefined,
// {
//     'minimumFractionDigits': 2,
//     'maximumFractionDigits': 2
// });