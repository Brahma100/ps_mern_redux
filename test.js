fetch("https://tenexch.com/api/game/placebetgm",
    {
        headers: {
            'accept': 'application/json, text/plain, /',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmZjc4MTIwOS04NDU0LTRlYWItYmVjZC1iNDVjMWVhZmU2MDIiLCJ1c2VybmFtZSI6ImZmNzgxMjA5LTg0NTQtNGVhYi1iZWNkLWI0NWMxZWFmZTYwMiIsImhyVXNlciI6IjQ0MDMxOSIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTU4Ni8iLCJhdWQiOiI0MTRlMTkyN2EzODg0ZjY4YWJjNzlmNzI4MzgzN2ZkMSIsImV4cCI6MTY1NTgyNDQxNiwibmJmIjoxNjU1NzM4MDE2fQ.m4HnB0N_5aJcQcidux4tFZeO4wwKoV28XaKVJSzIhIA',
            'content-Type': 'application/json;charset=UTF-8',
            'cookie': 'rememberMe=true; barcode=0319-1206-1806-0051; XSRF-TOKEN=eyJpdiI6Ikd6TWZPK2hMbkRVRUZyVUE3d25hWnc9PSIsInZhbHVlIjoiK1R0ZjV5aWVRZUM3KzdjVEs5UXNweElhZFwvRnRIUlwvVklwVjNPSGhhMXB2Z05uTm1QaWY4UEJGcjUzNWNSNFlXIiwibWFjIjoiOTBhYzEzOTUyYmM2MzA5YThiZDMxODg3NzdjMjMzNWE0M2U0NmU2ZjliZmQzMDg5OTY3NTA4Y2I5MzhlMzg1MyJ9; laravel_session=eyJpdiI6IlJZYkdXVW1Bc1JwWkFKQkVQSWhzRHc9PSIsInZhbHVlIjoielFYYnUzK1N1QnhcL1grT2RESmUzQ0E2UjNxbWd4UXI2WlNnY0swVEc1dnFiTDlaSkR2bU1VelNjWXMySExzQlQiLCJtYWMiOiJlNGQ3ZmU5YTJmNzYzNTEwM2IyMzY5OGQ2MWQ2YWMzOTk1OGEzNDJhZDM3NTEyY2EyNTg3ZTA2N2UzMDEyOWJiIn0=',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'x-csrf-token': 'yS9KSBO08bHAgH6SChUl1hsrB6m1gnMwNfYMpBvT',
            'x-requested-with': 'XMLHttpRequest',
            'x-xsrf-token': 'eyJpdiI6IlZuMG56eWc3OWtic2xFUDJsamNQVFE9PSIsInZhbHVlIjoiR2UyUk4xNlJvZnBOb0l4dXNnbGN3ZGNHZkdkM29DWlwvazgzZnRTdXR3dFJhY21WdnlJTmJXMUtDSlBjS0w5WlUiLCJtYWMiOiIzZWZmZmVjZjUyZWIyOTJhYjg2MWMyYjE3NjI3YWIwY2JlMmEzMmU1MzEzZjVhMjIzZDUzMGI1N2I0MTk1MTQwIn0='
        },
        method: "POST",
        body: JSON.stringify(
            {
                "data": "6aO6T7FBiH9vvSCbCnJNBtdogNDTMQfxrieb9sZgTaVGg/yF30SDt46DDr5gVvC27J2dtsHyzhHnpBSYzN/uCrPHf7PFMrMqxXuMMLMVtSkUj4sK0ZejpJfcF0oQHgvQPNf9/YvABz4NiWUR2xSa1tf2CbiLvdMR1gVATckSto9VXAC24EQ8p3qfllvsu6oiKZxzM+wETq5p3grx865eEQ==##@##0dc7c6095a8408490c67ba1c300b764f##@##c2e6a4bf476dda9f"
            }
        )
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res.message) })