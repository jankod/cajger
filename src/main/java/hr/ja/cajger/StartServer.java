package hr.ja.cajger;

import java.io.IOException;
import java.net.ServerSocket;

public class StartServer {

    public static void main(String[] args) throws IOException {
        ServerSocket ss = new ServerSocket(80);
        ss.getReuseAddress();
        System.out.println("dela");
        ss.close();

    }
}
