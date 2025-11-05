#include <stdio.h>

int m=50;//global
int n=60;

int localVar(){
    
    int x = 5;
    auto int y=6;//local
    register int z=8;//register storage for fast retrival and store in register if that variable value is to use repeatedly
    printf("%d\n",x);
    printf("%d\n",y);
    printf("%d\n",z);

    static int p=12;
    printf("%d\n",p);
    p++;
    printf("%d\n",m);//50
    printf("%d\n",n);//60
    printf("\n");
}
int main() {
    printf("");
    // printf("%d\n",x);//error
    // printf("%d\n",y);//error
    // printf("%d\n",z);//error
    printf("\n");
    localVar();
    localVar();
    localVar();//p=14//as it gets updated in previous localVar call

    printf("%d\n",m);//50
printf("%d\n",n);//60


    return 0;


}