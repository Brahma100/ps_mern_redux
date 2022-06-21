fetch("https://lordsexch.com/api/game/placebetgm",
    {
        headers: {
            'accept': 'application/json, text/plain, /',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMGEwYjViYS03Njg5LTRmMTEtOWIwOC01ZTIzZTk1MTcxMzciLCJ1c2VybmFtZSI6IjAwYTBiNWJhLTc2ODktNGYxMS05YjA4LTVlMjNlOTUxNzEzNyIsImhyVXNlciI6IjQwOTAxOSIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTU4Ni8iLCJhdWQiOiI0MTRlMTkyN2EzODg0ZjY4YWJjNzlmNzI4MzgzN2ZkMSIsImV4cCI6MTY1NTgyNTkzNywibmJmIjoxNjU1NzM5NTM3fQ.4SFfeJksY-KjHVIX95SN8js1SjALa34l3ESCRsgFu1E',
            'content-Type': 'application/json;charset=UTF-8',
            'cookie': 'rememberMe=true; barcode=0319-1206-1806-0051; XSRF-TOKEN=eyJpdiI6Ikd6TWZPK2hMbkRVRUZyVUE3d25hWnc9PSIsInZhbHVlIjoiK1R0ZjV5aWVRZUM3KzdjVEs5UXNweElhZFwvRnRIUlwvVklwVjNPSGhhMXB2Z05uTm1QaWY4UEJGcjUzNWNSNFlXIiwibWFjIjoiOTBhYzEzOTUyYmM2MzA5YThiZDMxODg3NzdjMjMzNWE0M2U0NmU2ZjliZmQzMDg5OTY3NTA4Y2I5MzhlMzg1MyJ9; laravel_session=eyJpdiI6IlJZYkdXVW1Bc1JwWkFKQkVQSWhzRHc9PSIsInZhbHVlIjoielFYYnUzK1N1QnhcL1grT2RESmUzQ0E2UjNxbWd4UXI2WlNnY0swVEc1dnFiTDlaSkR2bU1VelNjWXMySExzQlQiLCJtYWMiOiJlNGQ3ZmU5YTJmNzYzNTEwM2IyMzY5OGQ2MWQ2YWMzOTk1OGEzNDJhZDM3NTEyY2EyNTg3ZTA2N2UzMDEyOWJiIn0=',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'x-csrf-token': 'EmXevi0ikU5c1WWM7TdpziHCHBtztQqaS5jwJY9i',
            'x-requested-with': 'XMLHttpRequest',
            'x-xsrf-token': 'eyJpdiI6Ik9SWGJGZ1REMHNWQzYzYVRIMGpyd3c9PSIsInZhbHVlIjoiSnZXdTFjYmdsUWh1U09JRHRVWFBnRTF6RlNzdE9vdG5iQ0syYkRTQUN3NWhVRGIrbDltT2dcL1wvbWJVXC9QQTlaNSIsIm1hYyI6IjkxNmI3ZTRiNWRhYzU4YzQwNTdjM2ZmYmNhODJhMmJlYzk3MzcwOTZlYWE0ZjA0ODFiNGZlMDYxNzIxMzUyNDgifQ=='
        },
        method: "POST",
        body: JSON.stringify(
            {
                "data": "2NPFtqNSnMtEmq186ZkKYj7+Fry0j4P5nQWE1LvLGm+gg+ggPWEWrdjeCHCUYAxX0V+szPHXC+GZYsz+SeVCRLcYTrhbZX7AhU06PTo3fdbUCvXIQoZsmybDFopU7IEd5888NaAk0sxn7DtG+ieXuEVEyoOHXUocO5uhXMuBlDlCX4+XGgUbp+Kc0wHuxuD4YqYZOez/vEcnxpsYQ5Hiqw==##@##f291fc0a2466299c9733c3b578bab0da##@##ddcfb8ad7054259e"
            }
        )
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res.message) })