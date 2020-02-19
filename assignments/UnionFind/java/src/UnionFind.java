import java.util.Arrays;

public class UnionFind implements IUnionFind{

    private int count;
    private int[] pointSet;

    public UnionFind(int sizeOfSet){
        this.count = sizeOfSet;
        this.pointSet = new int[sizeOfSet];

        // Creates the list of
        for (int i = 0; i < sizeOfSet; i++) {
            this.pointSet[i] = i;
        }
    }

    @Override
    public void union(int p, int q) {

        int p1 = this.find(p);
        int p2 = this.find(q);
        for (int i = 0; i < this.pointSet.length; i++) {
            if(this.find(i) == p2) this.pointSet[i] = p1;
        }
    }

    @Override
    public int find(int p) {
        return this.pointSet[p];
    }

    @Override
    public boolean connected(int p, int q) {
        return this.find(p) == this.find(q);
    }

    @Override
    public int count() {
        return this.count;
    }

    @Override
    public String toString() {
        return "pointSet=" + Arrays.toString(pointSet);
    }
}
