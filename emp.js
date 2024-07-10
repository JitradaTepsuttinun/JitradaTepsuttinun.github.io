L = [
    { id: 6511234, name: 'Jack', salary: 10000 },
    { id: 6511235, name: 'Mike', salary: 15000 },
    { id: 6511236, name: 'Nancy', salary: 20000 },
    { id: 6511237, name: 'Alice', salary: 30000 },
]

// JSON Object, JavaScript Object Notation
// { key: value }
// for(let i=0; i<L.length; i++) {
//     L[i].salary *= 1.1
//     L[i].age = 30
// }

// Option 1: use function
function increaseSalary(emp) {
    emp.salary *= 1.1
    return emp
}
// L.map(increaseSalary)

// Option 2: use Arrow function
L2 = L.map((emp) => {
    emp.salary *= 1.1
    emp.bonus = emp.salary * 0.2
    return emp
})
.sort((a,b) => a.name.localeCompare(b.name))

console.table(L2)
// console.log(L[0].name.localeCompare(L[1].name))

// Try to calculate for BONUS
// BONUS is a new field in the JSON object
// BONUS = 20% of the salary