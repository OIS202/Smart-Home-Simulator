package com.Util;

import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.SmartHomeSimulator.iHome.Util.CsvTemperature;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class CsvTemperatureTest {

    @Test
    public void testReadCsvToMap() throws Exception {
        // Prepare test data
        String csvData = "Date,Time,Temperature\n" +
                "2024-03-25,12:00,25\n" +
                "2024-03-25,13:00,26\n";
        MultipartFile multipartFile = createMockMultipartFile(csvData);

        // Call the method
        Map<String, Integer> result = CsvTemperature.readCsvToMap(multipartFile);

        // Assert the result
        assertEquals(2, result.size());
        assertEquals(25, result.get("12:00"));
        assertEquals(26, result.get("13:00"));
    }

    @Test
    public void testReadCsvToMap_InvalidData() {
        // Prepare test data with invalid format (missing fields)
        String csvData = "Date,Time,Temperature\n" +
                "2024-03-25,12:00\n";
        MultipartFile multipartFile = createMockMultipartFile(csvData);

        // Call the method and assert exception
        assertThrows(Exception.class, () -> CsvTemperature.readCsvToMap(multipartFile));
    }

    @Test
    public void testReadCsvToMap_NonIntegerTemperature() {
        // Prepare test data with non-integer temperature
        String csvData = "Date,Time,Temperature\n" +
                "2024-03-25,12:00,abc\n";
        MultipartFile multipartFile = createMockMultipartFile(csvData);

        // Call the method and assert exception
        assertThrows(NumberFormatException.class, () -> CsvTemperature.readCsvToMap(multipartFile));
    }

    private MultipartFile createMockMultipartFile(String csvData) {
        try {
            return new MockMultipartFile("file", "test.csv", "text/csv", new ByteArrayInputStream(csvData.getBytes()));
        } catch (IOException e) {
            // This should never happen in a test scenario
            throw new RuntimeException("Error creating mock MultipartFile", e);
        }
    }
}
