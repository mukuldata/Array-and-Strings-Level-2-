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

// 2                                     Max Chunks To Make Array Sorted:

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

// 3                                      Max Chunks To Make Array Sorted 2: Leetcode (HARD)
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

// 4                                                    Range Addition:
public static int[] Range(int length, int[][] updates) {
          int [] res=new int[length];

         for(int i=0;i<updates.length;i++){
            int start=updates[i][0];
            int end=updates[i][1];
            int val=updates[i][2]; 

                res[start]+=val;
                if(end+1<length){
                res[end+1]-=val; //To nulify the prefix sum for index;
         }
        }

         //Prefix sum:
        int sum=0;
        for(int i=0; i<length;i++){
            sum+=res[i];
            res[i]=sum;
        }
         return res;
     }
     // ****************************END***************************
    
// 5  Partition Labels:

public static List<Integer> partitionLabels(String s) {
    List<Integer> list=new ArrayList<>();
    int n=s.length();
    HashMap<Character,Integer> hm=new HashMap<>();
    //To find the last occurence of that element:
    for(int i=0;i<n;i++){
      hm.put(s.charAt(i),i);
    }

    int mx=0;
    int prev=-1;

    //Same as max chunk af array: Find impact
    for(int i=0;i<n;i++){
       int val=hm.get(s.charAt(i));
       mx=Math.max(mx,val);

       if(mx==i){
         prev=mx-prev;
         list.add(prev);
         prev=mx;

       }

    }
    return list;

  }

  // ****************************END***************************

// 6  Partition Array Into Disjoint Intervals: O(N) space

public static int partitionDisjoint(int[] arr) {
    int n=arr.length;
    int [] lmax=new int[n];
    int [] rmin=new int[n+1];

    //Filling lmax:
    int mx=arr[0];
    lmax[0]=mx;

    for(int i=1;i<n;i++){
     mx=Math.max(arr[i],mx);
     lmax[i]=mx;
    }

    //Filling rmin:
    int mn=Integer.MAX_VALUE;
    rmin[n]=mn;

    for(int i=n-1;i>=0;i--){
      mn=Math.min(mn,arr[i]);
      rmin[i]=mn;
    }
    int ans=0;
    for(int i=0;i<n;i++){
      if(lmax[i]<rmin[i+1]){
        ans=i;
        break;
      }
     
    }
    return ans+1;
  }


// ****************************END***************************

// 3 Next Greater Element To The Right:     (MEDIUM)**

public static int[] solve(int[] arr){
   int [] res=new int[arr.length];
   int n=arr.length;
// O(2n) --> O(n) complexity:
  Stack<Integer>st=new Stack<>();
  // pop,print,push;
  st.push(arr[n-1]);
  res[n-1]=-1;
  for(int i=n-2;i>=0;i--)
  { 
    //popping out the smaller elements from between to get next greater on peek:
    while(st.size()>0 && st.peek()<=arr[i] ){
      st.pop();
    }

    if(st.size()==0){
      res[i]=-1;  //No greater element present on right
    }
    else{
      res[i]=st.peek();
    }

    st.push(arr[i]);// it can be greatest for someone
  }
   return res;

 }

// ****************************END***************************

//4 Stock Span: (EASY): 

public static int[] solve(int[] arr){
   int [] res=new int[arr.length];
   int n=arr.length;

   //Finding next greater element to the left:
    Stack<Integer> st=new Stack<>();
    st.push(0);
    res[0]=1;

    for(int i=1;i<n;i++)
    {
      //popping the smaller elements index:
      while(st.size()>0 && arr[st.peek()]<arr[i]){
        st.pop();
      }
      if(st.size()==0){
        res[i]=i+1;    //means there is no max in left
        }
        else{
          res[i]=i-st.peek();   //peek has max element index   
        }
        st.push(i);
    }
  return res;
 }

// ****************************END***************************



