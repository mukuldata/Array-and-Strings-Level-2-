
// 1. Duplicate Brackets: (EASY)

class Main{
   public static void main(String[] args){
      Scanner scn=new Scanner(System.in);
      String str= scn.nextLine();
      Stack<Character> st=new Stack<>();
      int ct=0;
//       Checking if the characters are present inbetween brackets : If not present the duplicate brackets are there
      for(int i=0;i<str.length();i++){
         if(str.charAt(i)!=')'){
            st.push(str.charAt(i));
         }
         else{
            while(st.peek()!='('){
               st.pop();
               ct++;
            }
            if(ct>0){
               st.pop();
               ct=0;
            }
            else{
               System.out.println("true");
               return ;
            }

        }

      }

      System.out.println("false");

   }
}
