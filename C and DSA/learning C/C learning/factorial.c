#include <stdio.h>

int fact(int num){
    if (num==0){
        return 1; //base case
    }
    else{
        return num*fact(num-1);
    }
}

int main(){
int num;
printf("Enter the number to find it's factorial : ");
scanf("%d", &num);
fact(num);
printf("Factorial of %d is %d", num, fact(num));
}
