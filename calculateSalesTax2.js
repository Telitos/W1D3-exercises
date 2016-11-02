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


  function totalSales(sales) {
    var total = 0
    sales.forEach(function(val) {
    total += val
    })
    return total
  }

  var companyReport = {}


  salesData.forEach(function(company) {
    var totalTax = 0
    if (company.province === "AB") {
      totalTax += totalSales(company.sales)*taxRates.AB
      } else if (company.province === "BC") {
      totalTax += totalSales(company.sales)*taxRates.BC
      } else {
      totalTax += totalSales(company.sales)*taxRates.SK
      }
    if (!companyReport.hasOwnProperty(company.name)) {
      companyReport[company.name] = {'totalSales' : totalSales(company.sales), 'totalTaxes': totalTax}
    } else {
      companyReport[company.name]['totalSales'] += totalSales(company.sales)
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