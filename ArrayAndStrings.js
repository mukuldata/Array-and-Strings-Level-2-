// 1.                  Product Of Array Except Itself Without Using Division Operator:
    //Brute force: using two loops:
    // Efficient: O(n)
    //Using left and right array:
  public static int[] productExceptSelf(int[] arr) {
        int n=arr.length;
        int [] left=new int[n];
        int [] right=new int[n];
            //left--> product of elements so far from left:
            int productLeft=arr[0];
            left[0]=productLeft;
            for(int i=1;i<n;i++){
                productLeft*=arr[i];
                left[i]=productLeft;
            }

            //right--> product of elements so far from right:
             int productRight=arr[n-1];
            right[n-1]=productRight;
            for(int i=n-2;i>=0;i--){
                productRight*=arr[i];
                right[i]=productRight;
            }

            int [] res=new int[n];
            res[0]=right[1];
            // product=(leftSoFar)*(rightSoFar)
            for(int i=1;i<n-1;i++){
                res[i]=left[i-1]*right[i+1];
            }
            res[n-1]=left[n-2];

            return res;
    }

// ****************************END***************************

// 2 Max Chunks To Make Array Sorted:

 public static int maxChunksToSorted(int[] arr) {
        //Chaining technique:  
         int mx=Integer.MIN_VALUE;
         int count=0;
         int n=arr.length;
         for(int i=0;i<n;i++){
             mx=Math.max(arr[i],mx);
             if(mx==i){
                 count++;
             }
        }

        return count;
    }
// ****************************END***************************

// 3 Max Chunks To Make Array Sorted 2: 
// Same concept : Chaining technique in differnt way

public static int maxChunksToSorted2(int[] arr) {
        int n=arr.length;
        int [] rmin=new int[n+1];
        int [] lmax=new int[n];

        //Fill rmin-> minimum so far from right;
        int mn=Integer.MAX_VALUE;
        rmin[n]=mn;

        for(int i=n-1;i>=0;i--){
            mn=Math.min(arr[i],mn);
            rmin[i]=mn;
        }

    //Filling lmax array:
    int mx=arr[0];
    lmax[0]=mx;
    for(int i=1;i<n;i++){
        mx=Math.max(arr[i],mx);
        lmax[i]=mx;
    }


    //Finding count:
    int count=0;
    for(int i=0;i<lmax.length;i++){
        if(lmax[i]<=rmin[i+1]){
          count++;
        }
    }

    return count;
    }
// ****************************END***************************

// 4 Range Addition:


