
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
//  *********************************END***********************

// 2 Balanced Brackets: (EASY)
class Main{
   public static void main(String[] args){
      Scanner scn=new Scanner (System.in);
      String str=scn.nextLine();

      Stack<Character> st=new Stack<>();

      for(int i=0;i<str.length();i++){
         char  ch=str.charAt(i);
         if(ch=='(' || ch=='{' || ch=='['){
            st.push(ch);
         }

         else if(ch==')'){
           boolean val=handleClosing(st,'(');
           if(val==false){
               System.out.println(val);
               return;
            }
         }
         else if(ch=='}'){
            boolean val=handleClosing(st,'{');
            if(val==false){
               System.out.println(val);
               return;
            }
          }
         else if(ch==']'){
            boolean val=handleClosing(st,'[');
            if(val==false){
               System.out.println(val);
               return;
            }
         }
      }

  // Special case : When opening brackets are more      
         if(st.empty()){
            System.out.println(true);
         }
         else{
            System.out.println(false);
         }
   }
  //  Special case : when closing brackets are  more
   public static boolean handleClosing(Stack<Character> st,char init){
       if(st.size()==0){
               return false;
               }
      else if(st.peek()!=init){
               return false;
               }
               
      else{
         st.pop();
         return true;
         }
   }
}
