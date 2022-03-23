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

// 2 
