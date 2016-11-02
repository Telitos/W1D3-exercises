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

function totalSales(sales){
  var total = 0
  sales.forEach(function(val){
  total += val
  })
  return total
}


function companySales(){
  var companyTotalSales = {}
  companySalesData.forEach(function(company) {
  if (!companyTotalSales.hasOwnProperty(company.name)) {
    companyTotalSales[company.name] = totalSales(company.sales)
  } else {
    companyTotalSales[company.name] += totalSales(company.sales)
    }
  })
  return companyTotalSales
}
console.log(companySales())