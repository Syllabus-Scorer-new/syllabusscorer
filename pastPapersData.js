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
        year: 2015,
        level: "Foundation",
        paper: "Paper",
        paperUrl: "/assets/pdfs/maths/foundationlevel.2015.pdf"
      },
      {
        year: 2016,
        level: "Foundation",
        paper: "Paper",
        paperUrl: "/assets/pdfs/maths/foundationlevel.2016.pdf"
      },
      {
        year: 2017,
        level: "Foundation",
        paper: "Paper",
        paperUrl: "/assets/pdfs/maths/foundationlevel.2017.pdf"
      },
      {
        year: 2015,
        level: "Ordinary",
        paper: "Paper",
        paperUrl: "/assets/pdfs/maths/ordinarylevel.2015.pdf"
      },
      {
        year: 2016,
        level: "Ordinary",
        paper: "Paper",
        paperUrl: "/assets/pdfs/maths/ordinarylevel.2016.pdf"
      },
      {
        year: 2017,
        level: "Ordinary",
        paper: "Paper",
        paperUrl: "/assets/pdfs/maths/ordinarylevel.2017.pdf"
      },
      {
        year: 2015,
        level: "Higher",
        paper: "Paper 1",
        paperUrl: "/assets/pdfs/maths/paper12015.pdf"
      },
      {
        year: 2016,
        level: "Higher",
        paper: "Paper 1",
        paperUrl: "/assets/pdfs/maths/paper1.2016.pdf"
      },
      {
        year: 2017,
        level: "Higher",
        paper: "Paper 1",
        paperUrl: "/assets/pdfs/maths/paper1.2017.pdf"
      },
      {
        year: 2015,
        level: "Higher",
        paper: "Paper 2",
        paperUrl: "/assets/pdfs/maths/paper2.2015.pdf"
      },
      {
        year: 2016,
        level: "Higher",
        paper: "Paper 2",
        paperUrl: "/assets/pdfs/maths/paper2.2016.pdf"
      },
      {
        year: 2017,
        level: "Higher",
        paper: "Paper 2",
        paperUrl: "/assets/pdfs/maths/paper2.2017.pdf"
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

