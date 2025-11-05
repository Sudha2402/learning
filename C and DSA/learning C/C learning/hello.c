#include <stdio.h>
int main() {
  int a = 5,*c;
  float b=45446.6776;
   // printf() displays the string inside quotation
     printf("Hello, World!");
     printf("\nsize of int is  %lu " , sizeof(int)); //4
     printf("\nsize of int is  %d " , sizeof(int)); //4
     printf("\n 36/5:%f " , 36/5); //0.000000 //
     printf("\n 36/5:%d " , 36/5); //7
     printf("\n&a:%d " , &a); //6356760 is the address where a is stored //6356756 and this changes everytime when code is added or changes in the program , it is recompiles. otherwise it remains same in address if no changes made in the program.
    //  printf("\n *c:%d " , *c);
    printf("\n &b:%f " , &b); //&b:0.000000 
   return 0;
}
