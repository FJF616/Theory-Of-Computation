const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file

// Set up regex
\b((https?|ftp|file):)|(www|ftp)\.|[-A-Z0-9+&@#/%?=~_|$!:,.;]*[A-Z0-9+&@#/%=~_|$] 
// Print all matches
// while ((fgets(line, 1024, fp)) != NULL)
// {
//     line[strlen(line)-1] = '\0';
//     if ((retval = regexec(&re, line, 2, rm, 0)) == 0)
//     {
//         printf("<<%s>>\n", line);
//         printf("Line: <<%.*s>>\n", (int)(rm[0].rm_eo - rm[0].rm_so), line + rm[0].rm_so);
//         printf("Text: <<%.*s>>\n", (int)(rm[1].rm_eo - rm[1].rm_so), line + rm[1].rm_so);
//         char *src = line + rm[1].rm_so;
//         char *end = line + rm[1].rm_eo;
//         while (src < end)
//         {
//             size_t len = strcspn(src, " ");
//             if (src + len > end)
//                 len = end - src;
//             printf("Name: <<%.*s>>\n", (int)len, src);
//             src += len;
//             src += strspn(src, " ");
//         }
//     }
// } 
// return 0;
// }