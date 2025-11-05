#include <stdio.h>
#include <stdlib.h>

struct threeNum{
    int n1, n2, n3;
};

int main(){
    int n;
    struct threeNum num;
    FILE *fptr;
    if ((fptr = fopen("program.bin","rb")) == NULL){
        printf("Error! opening file");
         // Program exits if the file pointer returns NULL.
         exit(1);
         }
     for(n = 1; n <= 5; ++n){

        //  fread(&num, sizeof(struct threeNum), 1, fptr);

        printf("&num %d is %s\n",n,&num);//&num 1 is ¢→@: //&num 2 is n1  n2  n3  ûsu☻://NOTE:`ûsu☻ is terminator//&num is pointing to the structure defination address at first then in next loop , it will refer to the 0th index value in binary file and so on increase due to fread updation 
        printf("&num %d is %d\n",n,&num);//&num 1 is 6356748: //it will always point to the base address of num as %d is used in every loop 

         fread(&num, sizeof(struct threeNum), 1, fptr);//here 1 is the count for number of 12 bytes to be read from file pointed by the pointer//we are updating the values in the base address directly , you can think of it as scanf used &a to put the value at the address of a //it will read only 12 bytes in an iteration
        //  NOTE: here we are putting whole 12 bytes to &num not individual n1, n2, n3 parts hence num.n1 will give the address at that point
         printf("sizeof(struct threeNum) is %d\n",sizeof(struct threeNum));//sizeof(struct threeNum) is 12 //as it contains three integer and each is of 4 bytes hence 3*4=12 bytes 
     printf("&num %d is %s:\n",n,&num);//&num 1 is n1  n2  n3 //&num will give value here as it is in binary file hence &num which gives address will give the value due to be in binary file
     printf("&num %d is %d:\n",n,&num);//&num 1 is 6356748://it will point to the addressa and will be same always as base address is not changed , we only changed the value at this address

         printf("n1: %d\tn2: %d\tn3: %d\n", num.n1, num.n2, num.n3);//n1: 538980718   n2: 538980974   n3: 168637294 
         printf("n1: %d\tn2: %d\tn3: %d\n", &num.n1, &num.n2, &num.n3);// n1: 6356748     n2: 6356752     n3: 6356756 
         printf("n1: %d\tn2: %d\tn3: %d\n", *&num.n1, *&num.n2, *&num.n3);////n1: 538980718   n2: 538980974   n3: 168637294  //same as num.n1

        //  printf("n1: %s\tn2: %s\tn3: %s\n",&num[0],&num[1],&num[2]);//it will give error in usinf [] anywhere

     }
     fclose(fptr);
     return 0;
}

//Code submitted by Susobhan Akhuli
