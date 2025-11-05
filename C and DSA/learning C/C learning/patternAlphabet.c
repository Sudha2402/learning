#include <stdio.h>
int main() {
   int i, j;
   char input, alphabet = 'A';
   printf("Enter an uppercase character you want to print in the last row: "); //E
   scanf("%c", &input); //E will be a string , writing "E" will give error

   
   for (i = 1; i <= (input - 'A' + 1); ++i) {
      for (j = 1; j <= i; ++j) {
         printf("%c ", alphabet);
      }
      ++alphabet;//ASCII characters can be incremented like this.//it will give B after preIncrement of A
      printf("\n");
   }

/*
Enter an uppercase character you want to print in the last row: E
A
B B
C C C
D D D D
E E E E E
*/





   return 0;
}
