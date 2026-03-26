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
    items: []
  },
  "english": {
    displayName: "English",
    items: []
  },
  "irish": {
    displayName: "Irish",
    items: [
      {
        year: 2015,
        level: "Foundation",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/foundationlevel.2015.pdf"
      },
      {
        year: 2016,
        level: "Foundation",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/foundationlevel.2016.pdf"
      },
      {
        year: 2017,
        level: "Foundation",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/foundationlevel.2017.pdf"
      },
      {
        year: 2015,
        level: "Ordinary",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/ordinarylevel.2015.pdf"
      },
      {
        year: 2016,
        level: "Ordinary",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/ordinarylevel.2016.pdf"
      },
      {
        year: 2017,
        level: "Ordinary",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/ordinarylevel.2017.pdf"
      },
      {
        year: 2015,
        level: "Higher",
        paper: "Paper 1",
        paperUrl: "/assets/pdfs/irish/paper12015.pdf"
      },
      {
        year: 2016,
        level: "Higher",
        paper: "Paper 1",
        paperUrl: "/assets/pdfs/irish/paper1.2016.pdf"
      },
      {
        year: 2017,
        level: "Higher",
        paper: "Paper 1",
        paperUrl: "/assets/pdfs/irish/paper1.2017.pdf"
      },
      {
        year: 2015,
        level: "Higher",
        paper: "Paper 2",
        paperUrl: "/assets/pdfs/irish/paper2.2015.pdf"
      },
      {
        year: 2016,
        level: "Higher",
        paper: "Paper 2",
        paperUrl: "/assets/pdfs/irish/paper2.2016.pdf"
      },
      {
        year: 2017,
        level: "Higher",
        paper: "Paper 2",
        paperUrl: "/assets/pdfs/irish/paper2.2017.pdf"
      },
      {
        year: 2014,
        level: "Foundation",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/foundationlevel.2014.pdf"
      },
      {
        year: 2013,
        level: "Foundation",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/foundationlevel.2013.pdf"
      },
      {
        year: 2014,
        level: "Ordinary",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/ordinarylevel.2014.pdf"
      },
      {
        year: 2013,
        level: "Ordinary",
        paper: "Paper",
        paperUrl: "/assets/pdfs/irish/ordinarylevel.2013.pdf"
      },
      {
        year: 2014,
        level: "Higher",
        paper: "Paper 1",
        paperUrl: "/assets/pdfs/irish/higherlevel.p1.2014.pdf"
      },
      {
        year: 2013,
        level: "Higher",
        paper: "Paper 1",
        paperUrl: "/assets/pdfs/irish/higherlevel.p1.2013.pdf"
      },
      {
        year: 2014,
        level: "Higher",
        paper: "Paper 2",
        paperUrl: "/assets/pdfs/irish/higherlevel.p2.2014.pdf"
      },
      {
        year: 2013,
        level: "Higher",
        paper: "Paper 2",
        paperUrl: "/assets/pdfs/irish/higherlevel.p2.2013.pdf"
      }
    ]
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

