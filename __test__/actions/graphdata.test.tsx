import getGraphData from "@/actions/getGraphData";


describe("getGraphData", () => {
        it("should return formatted data", async () => {
            const result = await getGraphData();
            
            // Add your assertions based on the expected result
            // For example, you can check if the result is an array, has the expected length, etc.
            expect(Array.isArray(result)).toBe(true);
            expect(result.length).toBeGreaterThan(0);
             
            // You can add more specific assertions based on your data structure and logic.
        }); 
    
        // Add more test cases as needed
    });
