function gradeStudents(grades)
{
  for(let i=0; i<grades.length; i++)
  {
    if(grades[i]<38)
    {
      continue;
    }
    else
    {
      remainder = grades[i] % 5;
      if(remainder === 3)
      {
        grades[i] = grades[i] + 2;
      }
      else if(remainder === 4)
      {
        grades[i] = grades[i] + 1;
      }
      else
      {
        continue;
      }
    }
  }
  return grades;
}

grades = [73,37,48,89];
console.log(grades);

grades = gradeStudents(grades);
console.log(grades);

