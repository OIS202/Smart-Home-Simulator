package com.SmartHomeSimulator.iHome.Util;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.web.multipart.MultipartFile;

public class CsvTemperature {
    public static Map<String, Integer> readCsvToMap(MultipartFile file) throws Exception {
        Map<String, Integer> temperatureMap = new TreeMap<>();
        
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            String line;
            boolean isFirstLine = true; // Flag to check if it's the first line (header)
            
            while ((line = reader.readLine()) != null) {
                if (isFirstLine) {
                    isFirstLine = false; // Set the flag to false after reading the header
                    continue; // Skip the header line
                }
                
                String[] parts = line.split(",");
                if (parts.length == 3) {
                    String time = parts[1].trim(); // Extract time
                    // int temperature = Integer.parseInt(parts[2].trim()); // Extract temperature
                    String temperatureStr = parts[2].trim().replace("−", "-"); // Replace non-standard minus sign
                    int temperature = Integer.parseInt(temperatureStr); // Extract temperature
                    temperatureMap.put(time, temperature); // Add to map
                } else {
                    throw new Exception("Invalid CSV format");
                }
            }
        }
        return temperatureMap;
    }
}
