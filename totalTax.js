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

/*function to be incorporated as an object in the comapnysales
data*/

function totalSales(sales) {
  var total = 0
  sales.forEach(function(val){
  total += val
  })
  return total
}


// function companySales(){
//   var companiesTotal = {}

//   companySalesData.forEach(function(company) {
//   if (!companiesTotal.hasOwnProperty(company.name)) {
//     companiesTotal[company.name] = {'totalSales':  totalSales(company.sales)};
//   } else {
//     companiesTotal[company.name]['totalSales'] += totalSales(company.sales)
//     }
//   })
//   return companiesTotal
// }
// console.log(companySales())

function CompanyTax() {
  var companiesTotal = {}

  companySalesData.forEach(function(company) {
    var totalTax = 0
    if (company.province === "AB") {
      totalTax += totalSales(company.sales)*salesTaxRates.AB
      // console.log(totalTax)
      // console.log(totalSales(company.sales))
      } else if (company.province === "BC") {
      totalTax += totalSales(company.sales)*salesTaxRates.BC
      // console.log(totalSales(totalTax))
      } else {
      totalTax += totalSales(company.sales)*salesTaxRates.SK
      // console.log(totalSales(totalTax))
      }
    if (!companiesTotal.hasOwnProperty(company.name)){
      companiesTotal[company.name] = {'totalTax': totalTax}
      } else {
      companiesTotal[company.name]['totalTax'] += totalTax
      }
    })
  return companiesTotal
}

console.log(CompanyTax())