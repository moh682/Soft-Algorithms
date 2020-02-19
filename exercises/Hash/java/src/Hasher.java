
public class Hasher implements IHash{

    @Override
    public int indexOfLetter(char letter) {
        return (int) letter - 97;
    }

    @Override
    public int indexOfInteger(int number) {
        return number;
    }

    @Override
    public int indexOfColor(String color) {
        return 0;
    }
}
