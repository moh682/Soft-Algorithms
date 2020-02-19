import java.io.*;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) throws IOException {
        File file = new File("/Users/mohammahomarhariri/Documents/SoftwareDeveloper/1.sem/Soft-Algorithms/exercises/unionFind/java/src/resources/LargeUF.txt");
        BufferedReader br = new BufferedReader(new FileReader(file));
        String str;
        ArrayList<String> list = new ArrayList<>();
        while ((str = br.readLine()) != null)
            list.add(str);

        int pointSetSize =  Integer.parseInt(list.get(0));
        System.out.println(pointSetSize);
        ArrayList<ArrayList<Integer>> pointsToUnify = new ArrayList<>();
        list.forEach( (value) -> {
            if(value.contains(" ")) {
                ArrayList<Integer> temp = new ArrayList<>();
                temp.add(Integer.parseInt(value.split(" ")[0]));
                temp.add(Integer.parseInt(value.split(" ")[1]));
                pointsToUnify.add(temp);
            }
        });

        UnionFind uf = new UnionFind(pointSetSize);

        long startTime = System.nanoTime();
        // This is where the method begins
        for (int i = 0; i < pointsToUnify.size() ; i++) {
            uf.union( pointsToUnify.get(i).get(0), pointsToUnify.get(i).get(1) );
        }

        long endTime = System.nanoTime();
        System.out.println("ms: " + (endTime - startTime) / 1000000);
    }

}
