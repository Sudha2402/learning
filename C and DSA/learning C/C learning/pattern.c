#include <stdio.h>

// https://www.programiz.com/c-programming/examples/pyramid-pattern

// Function to calculate factorial of a number

int factorial(int n)
{

  int fact = 1;

  for (int i = 1; i <= n; ++i)
  {

    fact *= i;
  }

  return fact;
}

int main()
{
  char pattern = '*'; // no error as single '' use , "" is only allowed in printf , or scanf or in any method but not declaration
  // char pattern = "*";//error due to double inverted comma ""

  int rows;
  int i, j;
  char input, alphabet = 'A';
  printf("Enter an uppercase character you want to print in the last row: "); // writing it below rows will not let it to take input from user.As the for loop will directly stars executing itself as it donot need input

  scanf("%c", &input);
  printf("Enter the number of rows : ");
  scanf("%d", &rows);

  // int i, j;
  // char input, alphabet = 'A';
  // printf("Enter an uppercase character you want to print in the last row: ");
  // scanf("%c", &input);

  // upper triangle //right half pyramid
  for (int i = 1; i <= rows; i++)
  {
    for (int j = 0; j < i; j++)
    {
      printf("%c", pattern); // only c works not s
                             // printf("%s", pattern);//non stopable execution //error
    }
    printf("\n");
  }

  // printf("\n");

  // lower triangle//inverted right half pyramid of *

  for (int i = 1; i <= rows-1; i++)
  {
    for (int j = rows-1; j >= i; j--)
    {
      printf("%c", pattern); // only c works not s as char used in defination
                             // printf("%s", pattern);//non stopable execution //error
    }
    printf("\n");
  }

  //    return 0;//after this return no code will be executed below

  // upper+lower if no printf("\n"); in between
  /*
  Enter the number of rows : 6
*
**
***
****
*****
******
*****
****
***
**
*

  */
  printf("\n");

  // Half Pyramid of Numbers
  for (int i = 1; i <= rows; i++)
  {
    for (int j = 1; j <= i; j++)
    {
      printf("%d", j); 
                       
    }
    printf("\n");

    /*
    1
    12
    123
    1234
    12345
    */
  }

  // Left Hand Pyramid Pattern
  printf("\n");

  for (int i = 1; i <= rows; i++)
  {

    for (int j = rows; j > 0; j--)

    {

      if (j > i)
      {
        printf(" ");
      }
      else
      {
        printf("%c", pattern);
      }
    }
    printf("\n");

    /*

     *
    **
   ***
  ****
 *****
******
    */
  }

  // Half Pyramid of Alphabets
  printf("\n");

  // int i, j;
  // char input, alphabet = 'A';
  // printf("Enter an uppercase character you want to print in the last row: ");
  // scanf("%c", &input);

  for (i = 1; i <= (input - 'A' + 1); ++i) // just for decideing the number of rows. String subtraction and then adding int 1 implicitly convert string into number
  {
    for (j = 1; j <= i; ++j)
    {
      printf("%c ", alphabet);
    }
    ++alphabet;
    printf("\n");
  }

  // Inverted half pyramid of numbers
  printf("\n");
  for (int i = 0; i < rows; ++i)
  { // at first it will take from 0 due to pre ++ but it will also start from 0 even if it would be post.
    for (int j = rows; j > i; j--)
    {
      printf("%d ", rows - j + 1);
    }
    printf("\n");
  }

  /*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
  */

  // OR
  printf("\n");
  for (int i = rows; i > 0; --i)
  {
    for (int j = 1; j <= i; ++j)
    {
      printf("%d ", j);
    }
    printf("\n");
  }

  /*
  1 2 3 4 5
  1 2 3 4
  1 2 3
  1 2
  1
  */

  // Full Pyramid of *
  printf("\n");

  for (int i = 0; i < rows; ++i)
  {
    // for (int j = rows - i; j <= rows + i; ++j)
    for (int j = 1; j <= rows + i; ++j) // rows + i is helful for right side extras * //this logic is based on that each row number consist of more * added according to the less than 1 row number , like for 3rd row 3-1 * more added hecne total * will be 3+2=5 in third row

    {
      if (j < rows - i)
      {
        printf("  "); // two time space given for good alignment as one alignment is given in * also
      }
      else
      {
        printf("* ");
      }
    }

    printf("\n");
  }

  /*
  *
  * * *
  * * * * *
  * * * * * * *
  * * * * * * * * *
  Element are Ok but all has to be center

  seconf for gave this along with if condition added
          *
          * *
          * * *
          * * * *
          * * * * *


  Final output of above code is

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *

  Hurrah we reached our destination

  */

  // OR method Full Pyramid of *
  printf("\n");

  int k = 0;
  int countDec = 0;                                // this countDec is for tracking the term which has to be decrement in number printing Pyramid
  for (i = 1; i <= rows; ++i, k = 0, countDec = 0) // this is called reset the value of k to 0 in next loop, whenever this loop will be called
  {
    for (int space = 1; space <= rows - i; ++space)
    {
      printf("  "); // all the spaces are fixec first in a row then print * with while //at first row it leave 4 spaces as this for lopp will executes four time according to the condition and then move to while loop then in next for second row , it will leave 3 spaces and so on in each row
    }
    while (k != 2 * i - 1) // thinks of as we are in third row and 2*3-1=5 hence till k starts from 0 in each row will print * upto 5 times hence it will execute as k starts from 0 to till 4 , hence total 5 times it will execute.
    {
      printf("* ");
      ++k;
    }
    printf("\n");
  }



  // Full Pyramid of Numbers
  printf("\n");
  // for (int i = 0; i < rows; i++, k = 0, countDec=0) //here only k = 0 that is only one but countDec=0 can't be set hence countDec will be the initial value it was
  for (int i = 0; i < rows; i++, k = 0)
  {
    for (int j = 0; j < rows - i - 1; j++)
    {
      printf(" \t");
    }
    // while (k != i * 2 - 1)
    while (k != 2 * i + 1) // if -1 it done then it will execute * infinitely and never terminate hence be careful, as here i is from 0 hence +1 is used
    {
      // printf("* ");

      // printf("%d ",k);
      /*
  0
0 1 2
0 1 2 3 4
0 1 2 3 4 5 6
0 1 2 3 4 5 6 7 8
      */

      //    printf("%d ",k+1);//it will do concatenation not addition
      /*
   0 1
 0 1 1 2 2 3
0 1 1 2 2 3 3 4 4 5
0 1 1 2 2 3 3 4 4 5 5 6 6 7
0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9
      */

      //  printf("%d ",(k+1));
      /*
              1
            1 2 3
          1 2 3 4 5
        1 2 3 4 5 6 7
      1 2 3 4 5 6 7 8 9

      */

      // if(j<=rows){
      //     printf("%d ",(i+1));
      // }

      // printf("%d ",(i+1));
      /*
              1
            2 2 2
          3 3 3 3 3
        4 4 4 4 4 4 4
      5 5 5 5 5 5 5 5 5
      */

      // printf("%d ",(k+i+1));
      /*
              1
            2 3 4
          3 4 5 6 7
        4 5 6 7 8 9 10
      5 6 7 8 9 10 11 12 13
      */

      if (k <= i)
      {
        printf("%d\t", (k + i + 1));
      }
      else
      {
        // printf("%d ",(k+i-1));
        /* only one column ok due to 1
            1
          2 3 2
        3 4 5 4 5
      4 5 6 7 6 7 8
    5 6 7 8 9 8 9 10 11
        */

        // printf("%d ",(k));
        /*
                1
              2 3 2
            3 4 5 3 4
          4 5 6 7 4 5 6
        5 6 7 8 9 5 6 7 8
        */

        // printf("%d ",(k-i+1));
        /*
                1
              2 3 2
            3 4 5 2 3
          4 5 6 7 2 3 4
        5 6 7 8 9 2 3 4 5
        */

        // countDec++;
        ++countDec;
        // printf("%d ",(k+i-(2*j)));, since no j we have used here which increments every step hence this new countDec is introduced to count the number of decrement to be done
        printf("%d\t", (k + i + 1 - 2 * countDec)); //

      }
      k++; // both work , no effect of this afterall , it has only to start the loop
           // ++k;
    }
    printf("\n");

    countDec = 0; // this count will work only here not in for loop where you set by , countDec=0 , it takes only one set value in for loop , hence k=0 will work but  countDec=0 not work hence remove it from there
  }

  /*

          1
        2 3 2
      3 4 5 4 3
    4 5 6 7 6 5 4
  5 6 7 8 9 8 7 6 5
  */

  printf("\n");

  // Inverted full pyramid of *
  for (int i = 0; i <= rows; i++, k = 0)
  {
    for (int j = 0; j < i; j++)
    {
      printf("  ");
    }
    while (k < 2 * (rows - i) - 1)
    {
      printf("* ");
      k++;
    }
    printf("\n");
  }

  /*

* * * * * * * * *
* * * * * * *
  * * * * *
    * * *
      *

  */

  // OR Inverted full pyramid of *
  printf("\n");

  for (i = rows; i >= 1; --i)
  {
    for (int space = 0; space < rows - i; ++space)
      printf("  ");
    for (j = i; j <= 2 * i - 1; ++j) // as j starts from rows 5 and j upperlimit will let it to execute 5 times only hence right inverted tringle formed.
      printf("* ");
    for (j = 0; j < i - 1; ++j) // to print more * according to right triangle.
      printf("* ");
    printf("\n");
  }

  /*

* * * * * * * * * * *
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *

  */

  // when for loop for (j = 0; j < i - 1; ++j) is removed then
  /*

  * * * * *
    * * * *
      * * *
        * *
          *

  */

  // Pascal's Triangle
  printf("\n");

  int coef = 1, space;
  for (i = 0; i < rows; i++)
  {
    for (space = 1; space <= rows - i; space++) // for left half space
      printf("  ");

    for (j = 0; j <= i; j++)
    {                       // j <= i is used as number of elements required in one row is the row number.
      if (j == 0 || i == 0) // i == 0 is only for first row //j==0 means first element of each row
        coef = 1;
      else
        coef = coef * (i - j + 1) / j;

      // coef is not always 1 , it gets updated in next call of row print and set to 1 again if it gets into if condition and after that it's only increments for that row untill the last element //suppose we are in third row and printing 2nd element , i=2, j=1(second element) and coet in rhs is 1  hence  coef in left set to 2 and this two will be used for next iteration of column ,now for 3rd element i=2, j=2 and coet=2(as per previous set) //lets take 5th row i=4 and j=1 for second element . let for third element i=4 , j=2 it will be evaluated as 4*(4-2+1)/2 = 6 //coef * (i - j + 1) / j always give 1 for same i and j value
      //  coef = (i - j + 1) / j;//not gives same result

      printf("%4d", coef); // Note: The format specifier %4d is used for the third argument to indicate that the value should be printed using the %d format conversion with a minimum field width of 4 characters. If the integer is less than 4 characters wide, printf() will insert extra blanks to align the output.

      //  printf("%d ", coef);it has no space in proper format
      /*
       1
     1 1
   1 2 1
 1 3 3 1
1 4 6 4 1
      */

      // printf("%2d ", coef);
      /*

         1
       1  1
     1  2  1
   1  3  3  1
 1  4  6  4  1

      */
    }
    printf("\n");
  }

  /*

               1
             1   1
           1   2   1
         1   3   3   1
       1   4   6   4   1
  */

  /*

  Coefficient of binom {n}C{k}={n!}/{k!(n-k)!}
  //OR
  (1 + x)n = 1 + n x + [n(n - 1)/2!] x2 +  [n(n - 1)(n - 2)/3!]  x3 +...

  Using binomial expansion formula,

  (x + y)n = nC0 xn y0 + nC1 xn - 1 y1 + nC2 xn-2 y2 + nC3 xn - 3 y3 + ... + nCn−1 x yn - 1 + nCn x0yn

  */

  // OR method for pascal triangle using factorial (defined this function above)
  // Outer loop for each row
  printf("\n");

  for (int i = 0; i < rows; ++i)
  {

    // Print leading spaces for alignment

    for (int j = 0; j < rows - i - 1; ++j)
    {

      printf("  ");
    }

    // Inner loop to print binomial coefficients

    for (j = 0; j <= i; ++j)
    {

      printf("%4d", factorial(i) / (factorial(j) * factorial(i - j)));
    }

    printf("\n"); // New line after each row
  }

  // Floyd's Triangle.
  printf("\n");
  int count = 1; // or  number = 1;
  for (int i = 1; i <= rows; i++)
  {
    for (int j = 1; j <= i; j++)
    {
      printf("%d ", count); // only c works not s
      // printf("%s", pattern);//non stopable execution //error
      count++;
    }
    printf("\n");
  }

  // Rhombus pattern
  for (i = 1; i <= rows; ++i)
  {

    for (j = i; j < rows; ++j)
    {

      printf("  ");
    }

    for (j = 1; j <= rows; ++j)
    {

      printf("* ");
    }

    printf("\n");
  }

  /*
   * * * * *
   * * * * *
   * * * * *
   * * * * *
   * * * * *
   */

  // diamond like Rhombus Pattern
  printf("\n");
  // rhombus with diamond shape

  // below pattern will form rhombus according to the rows as side length, means if 5 rows is entered then each edge of rhombus consists of 5 starts
  for (int i = 1; i <= rows; i++)
  {
    for (int j = 1; j <= 2 * i - 1; j++)
    {
      for (int j = 1; j <= rows - i; j++)
      {
        printf("  ");
      }
      while (j <= 2 * i - 1)
      {
        printf("* ");
        j++;
      }
    }
    printf("\n");
  }
  // printf("\n");

  for (int i = 1; i <= rows; i++)
  {
    for (int space = 1; space <= i; space++)
    {
      printf("  ");
    }
    for (int j = rows * 2 - i; j > (i + 1); j--)
    {
      printf("* ");
      
    }

    printf("\n");
  }

  /*

          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *
  */

  // OR method for diamond
  // for printing the upper half of the diamond

  for (i = 1; i <= rows; ++i)
  {

    for (j = i; j < rows; ++j)
    { // it is beneficial to start from i , hence for each row it executes only row-i number of time and print space

      printf("  ");
    }

    for (j = 1; j <= (2 * i - 1); ++j)
    {
      printf("* ");
    }

    printf("\n");
  }

  for (i = rows - 1; i >= 1; --i)
  { // it has 1 row less then total row
    for (j = rows; j > i; --j)
    {
      printf("  ");
    }
    for (j = 1; j <= (2 * i - 1); ++j)
    {
      printf("* ");
    }
    printf("\n");
  }

  /*

          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *
  */

  // Hourglass Pattern
  printf("\n");
  // for printing the upper half of the hourglass
  for (int i = 1; i <= rows; i++)
  {
    for (j = i; j > 1; j--)
    {
      printf("  ");
    }
    for (j = 1; j <= 2 * (rows - i + 1) - 1; j++)
    {
      printf("* ");
    }
    printf("\n");
  }

  // for printing the lower half of the hourglass
  for (int i = 2; i <= rows; i++)
  {
    for (j = 1; j <= rows - i; j++)
    {
      printf("  ");
    }
    for (j = 1; j <= 2 * i - 1; j++)
    {
      printf("* ");
    }
    printf("\n");
  }

  /*
   * * * * * * * * *
   * * * * * * *
   * * * * *
   * * *
   *
   * * *
   * * * * *
   * * * * * * *
   * * * * * * * * *
   */

  // OR method for Hourglass Pattern
  printf("\n");
  // for printing upper inverted pyramid

  for (i = rows; i >= 1; --i)
  {

    for (j = 0; j < rows - i; ++j)
    {

      printf("  ");
    }

    for (j = 1; j <= (2 * i - 1); ++j)
    {

      printf("* ");
    }

    printf("\n");
  }

  // for printing lower pyramid

  for (i = 2; i <= rows; ++i)
  {

    // iteration from second row as the first row is taken from the inverted pyramid.

    for (j = i; j < rows; ++j)
    {

      printf("  ");
    }

    for (j = 1; j <= (2 * i - 1); ++j)
    {

      printf("* ");
    }

    printf("\n");
  }

  // Hollow Square Pattern
  printf("\n");
  for (int i = 1; i <= rows; i++)
  {
    if (i == 1 || i == rows)
    {
      for (j = 1; j <= rows; j++)
      {
        printf("* ");
      }
    }
    else
    {
      for (j = 1; j <= rows; j++)
      {
        if (j == 1 || j == rows)
        {
          printf("* ");
        }
        else
        {
          printf("  ");
        }
      }
    }
    printf("\n");
  }

  /*
   * * * * *
   *       *
   *       *
   *       *
   * * * * *
   */

  // or by combining the * case for Hollow Square Pattern
  printf("\n");
  for (int i = 1; i <= rows; i++)
  {

    for (j = 1; j <= rows; j++)
    {
      if (j == 1 || j == rows || i == 1 || i == rows)
      {
        printf("* ");
      }
      else
      {
        printf("  ");
      }
    }
    printf("\n");
  }

  /*
   * * * * *
   *       *
   *       *
   *       *
   * * * * *
   */

  return 0; // after this return no code will be executed below
}