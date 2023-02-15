const studentsData = [
  {
    studentName: "Paloma",
    firstGrade: 10,
    secondGrade: 9
  },
  {
    studentName: "Mauricio",
    firstGrade: 9,
    secondGrade: 8
  },
  
  {
    studentName: "Jonas",
    firstGrade: 6,
    secondGrade: 8
  },
  
  {
    studentName: "Talita",
    firstGrade: 8,
    secondGrade: 7
  },
  {
    studentName: "João",
    firstGrade: 4,
    secondGrade: 6
  },
]

for (const student of studentsData) {
  const studentName = student.studentName
  const resultStudent = averageGrade(student.firstGrade, student.secondGrade)
  isAproved(resultStudent, studentName)
}

function averageGrade (gradeOne, gradeTwo){
  const result = ((gradeOne + gradeTwo)/2).toFixed(2)
  return result
}

function isAproved(studentAverage, studentName){
  if (studentAverage >= 7){
  alert (`O aluno ${studentName} obteve a média de ${studentAverage} e foi aprovado. Parabéns!`)
} else {
    alert (`O aluno ${studentName} obteve a média de ${studentAverage} e foi reprovado. Não desista de estudar e se dedique para a recuperação!`)
  }
}
