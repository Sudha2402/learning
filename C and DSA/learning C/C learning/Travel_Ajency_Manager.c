#include <stdio.h>

struct drivers{
    int license_No;
    char name[20];
    int age;
    char gender;
    char route;

}driver;

struct drivers d1,d2,d3;//valid


int main() {
    int n;
    printf("Enter the total number of drivers:\n");
    scanf("%d",&n);
    // driver *ptr = (driver*)malloc(n*sizeof(driver));
//    typedef struct drivers d1,d2,d3;//error
//    struct drivers d1,d2,d3;//not valid to define it in main , it should be global and outside main


    for(int i=0;i<n;i++){
        printf("Enter the license number of driver d%d\n",i+1);
        scanf("%d",&d1.license_No);
        printf("Enter the name of driver d%d\n",i+1);
        scanf("%s",&d1.name);
         printf("Enter the age of driver d%d\n",i+1);
         scanf("%d",&d1.age);
         printf("Enter the gender of driver d%d\n",i+1);
         scanf(" %c",&d1.gender);
         printf("Enter the route of driver d%d\n",i+1);
        scanf("%s",&d1.route);
    }

    printf("\n");
    
    printf("License Number\tName\tAge\tGender\tRoute\n");
    for(int i=0;i<n;i++){
        printf("%d\t\t%s\t%d\t%c\t%c\n",d1.license_No
        ,d1.name,d1.age,d1.gender,d1.route);
        }


    
    return 0;
}   