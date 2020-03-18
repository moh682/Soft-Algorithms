public class WeightedUnionFind implements IUnionFind {

    private int count;
    private int[] size;
    private int[] id;

    public WeightedUnionFind(int n){
        this.count = n;
        this.size = new int[n];
        this.id = new int[n];

        for (int i = 0; i < n; i++) {
            this.size[i] = i;
            this.id[i] = i;
        }
    }

    @Override
    public void union(int p, int q) {
        int rootP = this.findRoot(p);
        int rootQ = this.findRoot(q);
        if(rootP == rootQ) return;

        if(this.size[rootP] < this.size[rootQ]){
            this.id[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        }else{
            this.id[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        }
        this.count--;
    }

    @Override
    public int find(int p) {
        return this.size[p];
    }

    /**
     * This method keeps on looping until it find the root of the point
     * @param p the point we want to find the root of
     * @return the root point
     */
    public int findRoot(int p){
        while( p != this.id[p]){
            p = this.id[p];
        }
        return p;
    }

    @Override
    public boolean connected(int p, int q) {
        return this.find(p) == this.find(q);
    }

    @Override
    public int count() {
        return this.count;
    }
}
