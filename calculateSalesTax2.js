var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function salesTaxReport (salesData, taxRates) {

  var companyReport = {}

  function totalSales(company) {
    return company.sales.reduce(function (previous, current) {
      return previous + current
    });
  }

  function calculateTax (company) {
    return totalSales(company)*taxRates[company.province]
  }

  salesData.forEach(function(company) {

    var totalTax = calculateTax(company)

    if (!companyReport.hasOwnProperty(company.name)) {
      companyReport[company.name] = {'totalSales' : totalSales(company), 'totalTaxes': totalTax}
    } else {
      companyReport[company.name]['totalSales'] += totalSales(company)
      companyReport[company.name]['totalTaxes'] += totalTax
    }
  })
  return companyReport
}

var results = salesTaxReport(companySalesData, salesTaxRates);

console.log(results)


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/