package com.Util;


import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.SmartHomeSimulator.iHome.Util.CsvUtil;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class CsvUtilTest {

    @Test
    public void testParseCsvToMap() throws Exception {
        // Prepare test data
        String csvData = "RoomType,Count\n" +
                         "Bedroom,3\n" +
                         "LivingRoom,2\n";
        MultipartFile multipartFile = createMockMultipartFile(csvData);

        // Call the method
        Map<String, Integer> result = CsvUtil.parseCsvToMap(multipartFile);

        // Assert the result
        assertEquals(2, result.size());
        assertEquals(3, result.get("bedroom"));
        assertEquals(2, result.get("livingroom"));
    }

    @Test
    public void testParseCsvToMap_InvalidData() {
        // Prepare test data with invalid count
        String csvData = "RoomType,Count\n" +
                         "Bedroom,three\n";
        MultipartFile multipartFile = createMockMultipartFile(csvData);

        // Call the method and assert exception
        assertThrows(Exception.class, () -> CsvUtil.parseCsvToMap(multipartFile));
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
