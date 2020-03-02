import java.io.*;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) throws IOException {

        // This part gets the data from the file and make it possible for me to work with. Kind of making it dynamic
        // ------------------------------------------------------------------------------------------------
        File file = new File("/Users/mohammahomarhariri/Documents/SoftwareDeveloper/1.sem/Soft-Algorithms/assignments/UnionFind/java/src/resources/LargeUF.txt"); // Remember to change the directory
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
        // ------------------------------------------------------------------------------------------------

        UnionFind uf = new UnionFind(pointSetSize);
        WeightedUnionFind wuf = new WeightedUnionFind(pointSetSize);

        long startTime1 = System.nanoTime();
        for (int i = 0; i < pointsToUnify.size() ; i++) {
            wuf.union( pointsToUnify.get(i).get(0), pointsToUnify.get(i).get(1) );
        }

        long endTime1 = System.nanoTime();
        System.out.println("WeightedUnionfind ms: " + (endTime1 - startTime1) / 1000000);

        long startTime = System.nanoTime();
        for (int i = 0; i < pointsToUnify.size() ; i++) {
            uf.union( pointsToUnify.get(i).get(0), pointsToUnify.get(i).get(1) );
        }

        long endTime = System.nanoTime();
        System.out.println("BruteForce UnionFind ms: " + (endTime - startTime) / 1000000);
    }

}
