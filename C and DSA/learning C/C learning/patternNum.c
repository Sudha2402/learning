#include <stdio.h>
int main() {
   int i, space, rows, k = 0, count = 0, count1 = 0;
//    here count is responsible for tracking all the incresing terms and that is upto the rows required.
//    count1 is responsible for tracking the decreasing terms and that is also upto the rows required.
   printf("Enter the number of rows: ");
   scanf("%d", &rows);
   for (i = 1; i <= rows; ++i) { // for i=2
      for (space = 1; space <= rows - i; ++space) {
         printf("  ");
         ++count;//count = 4 as for loop executes four time //count = 3 for second row 
      }
      while (k != 2 * i - 1) { //1 != 2*1-1 //while loop terminates.
         if (count <= rows - 1) {//yes 4<=5-1
            printf("%d ", i + k);//1+0
            ++count;//count=5
         } else {
            ++count1;//count1 = 1
            printf("%d ", (i + k - 2 * count1)); //for third term of second row , i=2,k=2 as it is 3rd element starting from 0,count1=1 as it has just entered the else part and incremented at start, hence final evaluation is 2+2-2*1 = 2
            //if we will be at third row, forth and 5th element will be required to decrement , 4th element have i=3 , k=3 , count1=1 hence element is 3+3-2*1=4 and similarly 5th element have i=3 , k=4 , count1=2 hence element is 3+4-2*2=3 .
         }
         ++k;//k=1
      }
      count1 = count = k = 0; //now next move to second row
      printf("\n");
   }


   /*
   Enter the number of rows: 5
        1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5
   */
   return 0;
}
