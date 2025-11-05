#include <stdio.h>
int n = 5;
int w[10] = {3, 3, 2, 5, 1};
int p[10] = {10, 15, 10, 12, 8};
int W = 10;

int main()
{

    int cur_w = W;; // current weight after filling means the left weight to be filled

    float tot_v; // total value or profit or P

    // int i, maxi;

    int used[10]; // array to track which object is used to be filled in bag //only upto size index is used , hence it can be as used[n]

    for ( int i = 0; i < n; ++i)
        used[i] = 0; // initialized all to 0

    // cur_w = W;



    while (cur_w > 0)
    {

         int maxi = -1; // track index of maximum  value of ratio

        for (int i = 0; i < n; ++i){
            if ((used[i] == 0) &&
                ((maxi == -1) || ((float)p[i] / w[i] > (float)p[maxi] / w[maxi]))) // as it is in for loop it checks each object ratio and compare by updating maximum value index among unused
                maxi = i;//it will start from i=0 as or (maxi == -1) gets true
        }


        used[maxi] = 1; // fill the bag with this maximum index object.hence updating used value from 0(false) to 1(True)

        cur_w -= w[maxi]; // weight left after filling the bag //cur_w is updated means while condition is updated.

        tot_v += p[maxi]; // profit added considering as fully added then in else loop we will deduct it checking cur_w  after updation in adding this object.

        if (cur_w >= 0)
            printf("Added object %d (profit : %d, weight : %d) completely in the bag. Space left: %d.\n", maxi + 1, p[maxi], w[maxi], cur_w); // from here it will go to next iteration of while loop.

        else
        {

            // it is for partial weight and profit as after once next maximum index is found , it would have dedcted it's own weight from current weight and hence made it to reach to negative index hence it will be track in else part and we need to deduct that weight and add percentage weight.

            // printf("(int)(((float)cur_w )) = %d% \n", (int)(((float)cur_w)));                               //(int)(((float)cur_w )) = -4 //it comes as left space 1-this weight 5 => 1-5=-4
            // printf("(((float)cur_w )) = %f% \n", (((float)cur_w)));                                         //(((float)cur_w )) = -4.000000
            // printf(" w[maxi] = %d% \n", w[maxi]);                                                           // 5
            // printf("((1 + (float)cur_w / w[maxi]) * 100) = %f%% \n", ((1 + (float)cur_w / w[maxi]) * 100)); //((1 + (float)cur_w / w[maxi]) * 100) = 20.000000%

            // printf("(int)((1 + (float)cur_w / w[maxi]) * 100) = %d%% \n", (int)((1 + (float)cur_w / w[maxi]) * 100)); //(int)((1 + (float)cur_w / w[maxi]) * 100) = 19%

            printf("Added %d%% (profit : %d, weight : %d) of object %d in the bag.\n", (int)((1 + (float)cur_w / w[maxi]) * 100), p[maxi], w[maxi], maxi + 1); //(1+((-4/5)*100)=20 //(5-4)/5=1/5 part is included hence converted ito percentage

            tot_v -= p[maxi];//total profit deducted.

            tot_v += (1 + (float)cur_w / w[maxi]) * p[maxi];//total profit is updated here in percentage. 
        }
    }
    //    printf("Filled the bag with objects worth %.2f.\n", tot_v);//Filled the bag with objects worth 45.40.
    printf("Filled the bag with objects worth %2f\n", tot_v); // Filled the bag with objects worth 45.400002
    return 0;
}






// Added object 5 (8, 1) completely in the bag. Space left: 9.
// Added object 2 (15, 3) completely in the bag. Space left: 6.
// Added object 3 (10, 2) completely in the bag. Space left: 4.
// Added object 1 (10, 3) completely in the bag. Space left: 1.
// (int)(((float)cur_w )) = -4
// (((float)cur_w )) = -4.000000
//  w[maxi] = 5
// ((1 + (float)cur_w / w[maxi]) * 100) = 20.000000%
// (int)((1 + (float)cur_w / w[maxi]) * 100) = 19%
// Added 19% (12, 5) of object 4 in the bag.
// Filled the bag with objects worth 45.400002