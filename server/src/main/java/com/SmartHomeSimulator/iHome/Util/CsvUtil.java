package com.SmartHomeSimulator.iHome.Util;

import org.springframework.web.multipart.MultipartFile;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class CsvUtil {

    public static Map<String, Integer> parseCsvToMap(MultipartFile file) throws Exception {
        Map<String, Integer> roomCounts = new HashMap<>();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            String line;
            boolean isFirstLine = true; // Flag to check if it's the first line (header)

            while ((line = reader.readLine()) != null) {
                if (isFirstLine) {
                    isFirstLine = false; // Set the flag to false after reading the header
                    continue; // Skip the header line
                }
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    String roomType = parts[0].trim().toLowerCase().replaceAll("\\s+", "");
                    try {
                        int count = Integer.parseInt(parts[1].trim());
                        roomCounts.put(roomType, count);
                    } catch (NumberFormatException e) {
                        throw new Exception("Error parsing number from CSV: " + parts[1].trim(), e);
                    }
                }
            }
        }
        return roomCounts;
    }
}
