// Add your past paper + marking scheme links here.
// Format: { subjectKey: { displayName: string, items: PastPaperItem[] } }
// subjectKey is how we store/lookup the subject in URLs (lowercase, hyphenated).
//
// PastPaperItem:
// {
//   year: number,
//   level?: "Higher" | "Ordinary" | "Foundation" | "Common",
//   paper?: "Paper 1" | "Paper 2" | "Paper 3" | string,
//   paperUrl?: string,
//   markingSchemeUrl?: string,
//   notes?: string
// }

export const PAST_PAPERS = {
  "maths": {
    displayName: "Maths",
    items: [
      {
        year: 2024,
        level: "Higher",
        paper: "Paper 1",
        paperUrl: "https://example.com/maths-2024-h-p1.pdf",
        markingSchemeUrl: "https://example.com/maths-2024-h-p1-marking.pdf",
        notes: "Sample link — replace with SEC link"
      },
      {
        year: 2024,
        level: "Higher",
        paper: "Paper 2",
        paperUrl: "https://example.com/maths-2024-h-p2.pdf",
        markingSchemeUrl: "https://example.com/maths-2024-h-p2-marking.pdf"
      }
    ]
  },
  "english": {
    displayName: "English",
    items: []
  },
  "irish": {
    displayName: "Irish",
    items: []
  }
};

export function toSubjectKey(subjectName) {
  return String(subjectName || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

