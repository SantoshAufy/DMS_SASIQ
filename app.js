const icons = {
  home: '<path d="m3 10.5 9-8 9 8"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-7h6v7"/>',
  "badge-check": '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v6h6"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  "project-box": '<path d="M3 7h18"/><path d="M7 3h10l2 4H5l2-4Z"/><rect width="18" height="14" x="3" y="7" rx="2"/><path d="M8 12h8"/><path d="M8 16h5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92Z"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.88 1.18 6.88L12 17.77l-6.18 3.26L7 14.15 2 9.27l6.91-1.01Z"/>',
  bookmark: '<path d="M19 21 12 17 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
  "circle-help": '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"/><path d="M12 17h.01"/>',
  "chevrons-left": '<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>',
  "chevrons-right": '<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "arrow-right": '<path d="m12 5 7 7-7 7"/><path d="M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  menu: '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M2 12h20"/>',
  filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54Z"/>',
  "layout-grid": '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  "bar-chart": '<path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16v-9"/>',
  list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
  "refresh-cw": '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  "folder-open": '<path d="m6 14 1.5-3h14l-3 7a2 2 0 0 1-1.84 1.2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v3"/>',
  "cloud-upload": '<path d="M12 13v8"/><path d="m8 17 4-4 4 4"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/><path d="M16 16h6"/>',
  trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m16 6-4-4-4 4"/><path d="M12 2v13"/>',
  "more-vertical": '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>'
};

const legacyIcons = {
  folder: "📁",
  "chevrons-left": "«",
  "chevrons-right": "»",
  "arrow-left": "←",
  "arrow-right": "→",
  "chevron-down": "⌄",
  "chevron-right": "›",
  "chevron-left": "‹",
  briefcase: "💼",
  "folder-open": "📂",
  "cloud-upload": "⇪"
};

const documents = [
  ["ITP-MECH-001-RevA.pdf", "Project_001", "ITP-MECH-001", "ITP - Mechanical Works - Chiller System", "Inspection Plan", "A", "Approved", "20 May 2024", "Ahmed Khan", "2.4 MB", "pdf", true],
  ["ITP-MECH-002-Rev0.xlsx", "Project_001", "ITP-MECH-002", "ITP - Mechanical Works - AHU System", "Inspection Plan", "0", "Under Review", "20 May 2024", "Sara Ali", "1.1 MB", "xlsx", true],
  ["ITP-ELEC-001-RevB.docx", "Project_002", "ITP-ELEC-001", "ITP - Electrical Works - LV Panel", "Inspection Plan", "B", "Approved", "19 May 2024", "Fatima Noor", "3.2 MB", "docx", true],
  ["ITP-CIV-001-RevA.pdf", "Project_003", "ITP-CIV-001", "ITP - Civil Works - Concrete", "Inspection Plan", "A", "Rejected", "19 May 2024", "Mohammed Raza", "850 KB", "pdf", true],
  ["CON-MAIN-001.pdf", "Project_001", "CON-MAIN-001", "Main Contract Agreement", "Main Contract", "B", "Approved", "19 May 2024", "Fatima Noor", "3.2 MB", "pdf", true],
  ["TECH-SHOP-001.dwg", "Project_001", "TECH-SHOP-001", "Shop Drawing - Column C1", "Shop Drawings", "0", "Draft", "18 May 2024", "Mohammed Raza", "1.4 MB", "dwg", true],
  ["ACC-SOLAR-001.xlsx", "Project_001", "ACC-SOLAR-001", "Solaris Invoice - May 2024", "Solaris", "A", "Approved", "17 May 2024", "Ahmed Khan", "1.6 MB", "xlsx", true],
  ["ITP-ELEC-002-Rev0.pdf", "Project_002", "ITP-ELEC-002", "ITP - Electrical Works - Cable Trays", "Inspection Plan", "0", "Under Review", "16 May 2024", "Sara Ali", "2.0 MB", "pdf", false],
  ["PRJ-DRAW-001.pdf", "Project_003", "PRJ-DRAW-001", "Project Drawing - General Layout", "Project Drawing", "A", "Approved", "15 May 2024", "John Doe", "1.2 MB", "pdf", true],
  ["ITP-MECH-005-Rev0.xlsx", "Project_004", "ITP-MECH-005", "ITP - Mechanical Works - Ducting", "Inspection Plan", "0", "Draft", "14 May 2024", "Fatima Noor", "1.3 MB", "xlsx", false]
].map(([name, project, ref, subject, type, rev, status, date, by, size, ext, favorite], id) => ({ id, name, project, ref, subject, type, rev, status, date, by, size, ext, favorite }));

let selectedDocument = documents[0];
let folderBrowserRoot = null;
let uploadPathLocked = false;
let pendingRejection = null;
let pendingApproval = null;

const approvals = [
  {
    id: 0,
    title: "SOP - Travel Policy v2.0",
    reference: "SOP-TLP-002",
    stage: "Manager Review",
    uploadedBy: "Lisa Ray",
    initials: "LR",
    ext: "pdf",
    documentType: "Corporate SOP",
    department: "Admin",
    location: "Company Records > Admin > SOP",
    uploadedOn: "20 May 2024 10:30",
    size: "1.8 MB",
    revision: "2.0",
    confidentiality: "Internal Use",
    remarks: "Updated travel policy submitted for management review.",
    approvalPath: "Admin Manager > HR Manager > General Manager"
  },
  {
    id: 1,
    title: "Vendor Agreement.pdf",
    reference: "LGL-AGR-045",
    stage: "Legal Review",
    uploadedBy: "Rakesh Gupta",
    initials: "RG",
    ext: "docx",
    documentType: "Vendor Agreement",
    department: "Legal",
    location: "Company Records > Legal > Agreements",
    uploadedOn: "20 May 2024 09:45",
    size: "2.6 MB",
    revision: "A",
    confidentiality: "Confidential",
    remarks: "Agreement draft for vendor onboarding and legal validation.",
    approvalPath: "Legal Officer > Finance Manager > General Manager"
  },
  {
    id: 2,
    title: "BOQ - Project Alpha.xlsx",
    reference: "PRJ-ALP-BOQ-012",
    stage: "Finance Review",
    uploadedBy: "Meera Iyer",
    initials: "MI",
    ext: "xlsx",
    documentType: "Bill of Quantities",
    department: "Finance & Accounting",
    location: "Projects > Project_001 > Material Control > BOQ",
    uploadedOn: "19 May 2024 16:20",
    size: "3.4 MB",
    revision: "0",
    confidentiality: "Internal Use",
    remarks: "BOQ submitted with revised project quantity and cost details.",
    approvalPath: "Project Manager > Finance Manager > Construction Director"
  },
  {
    id: 3,
    title: "Drawing - Foundation.pdf",
    reference: "PRJ-ALP-DWG-103",
    stage: "QA Approval",
    uploadedBy: "Vikram Rao",
    initials: "VR",
    ext: "pdf",
    documentType: "Project Drawing",
    department: "Quality",
    location: "Projects > Project_001 > Construction > Drawings",
    uploadedOn: "18 May 2024 14:10",
    size: "4.1 MB",
    revision: "B",
    confidentiality: "Internal Use",
    remarks: "Foundation drawing submitted for QA verification before release.",
    approvalPath: "QA Engineer > Quality Manager > Project Manager"
  },
  {
    id: 4,
    title: "ITP-MECH-002-Rev0.xlsx",
    reference: "ITP-MECH-002",
    stage: "Technical Review",
    uploadedBy: "Sara Ali",
    initials: "SA",
    ext: "xlsx",
    documentType: "Inspection Plan",
    department: "Quality",
    location: "Projects > Project_001 > Quality > Inspection & Test Plan",
    uploadedOn: "18 May 2024 11:30",
    size: "1.1 MB",
    revision: "0",
    confidentiality: "Internal Use",
    remarks: "Mechanical AHU inspection plan submitted for discipline review.",
    approvalPath: "Project Engineer > Quality Manager > Project Manager"
  },
  {
    id: 5,
    title: "HSE Method Statement.pdf",
    reference: "HSE-METHOD-014",
    stage: "HSE Review",
    uploadedBy: "Ahmed Khan",
    initials: "AK",
    ext: "pdf",
    documentType: "Method Statement",
    department: "HSE",
    location: "Projects > Project_002 > HSE > Reports",
    uploadedOn: "17 May 2024 15:05",
    size: "2.8 MB",
    revision: "A",
    confidentiality: "Internal Use",
    remarks: "Method statement submitted for site safety review.",
    approvalPath: "HSE Officer > HSE Manager > Project Manager"
  },
  {
    id: 6,
    title: "Main Contract Variation.pdf",
    reference: "CON-VAR-009",
    stage: "Commercial Review",
    uploadedBy: "Fatima Noor",
    initials: "FN",
    ext: "pdf",
    documentType: "Contract Variation",
    department: "Contracts",
    location: "Projects > Project_003 > Contracts > Main Contract",
    uploadedOn: "16 May 2024 13:15",
    size: "2.2 MB",
    revision: "A",
    confidentiality: "Confidential",
    remarks: "Variation request submitted for commercial validation.",
    approvalPath: "Contract Manager > Finance Manager > Construction Director"
  },
  {
    id: 7,
    title: "Material Receipt Note.xlsx",
    reference: "MRN-PRJ-058",
    stage: "Store Review",
    uploadedBy: "John Doe",
    initials: "JD",
    ext: "xlsx",
    documentType: "Material Receipt Note",
    department: "Material Control",
    location: "Projects > Project_004 > Material Control > Project Materials > MRR",
    uploadedOn: "15 May 2024 10:40",
    size: "980 KB",
    revision: "0",
    confidentiality: "Internal Use",
    remarks: "Receipt note submitted for material control approval.",
    approvalPath: "Store Keeper > Material Manager > Project Manager"
  }
];

const node = (label, children = [], open = false) => ({ label, children, open });
const projectFolderStructure = [
  node("Quality", [node("Inspection & Test Plan"), node("Project Quality Plan"), node("RFI's"), node("Reports"), node("Hand Over")], true),
  node("HSE", [node("Project HSE Plan"), node("Permits"), node("Reports")]),
  node("Admin", [node("Employee"), node("Timesheet")]),
  node("Planning", [node("Schedule"), node("Reports"), node("QS & Invoices", [node("Main and Subcontracts")]), node("Photos")]),
  node("Material Control", [node("Local Material Store", [node("Issue Note"), node("Receipt Note"), node("Transfer Note")]), node("Project Materials", [node("MRR"), node("MOR"), node("Shipment Docs"), node("Others")])]),
  node("Contracts", [node("Main Contract"), node("Material Supply"), node("Work Execution")]),
  node("Construction", [node("Construction / Execution Plan"), node("Method Statements of All Disciplines"), node("Procedures of All Disciplines")]),
  node("Technical", [node("Technical Proposals"), node("Shop Drawings")]),
  node("Project DCC", [node("Project Correspondence Letters"), node("Document Transmittal"), node("Project Documents and Specification"), node("Project Drawings"), node("Project Generated Documents of All Disciplines")]),
  node("Accounting", [node("Salaries"), node("Maintenance"), node("Food Expenses"), node("SubCon Invoices"), node("Oil & Fuel"), node("Workers Wages"), node("Machineries Rental"), node("Utilities / Others")])
];
const cloneNodes = nodes => nodes.map(item => node(item.label, cloneNodes(item.children || []), item.open));
const trees = {
  general: [
    node("Company", [
      node("Quality", [node("Project Quality Plan (General)"), node("Construction Quality Plan"), node("Inspection & Test Plans")], true),
      node("HSE", [node("Policies & Plans"), node("Standard Operating Procedures"), node("Safe Work Method Statements"), node("Forms & Formats"), node("Reports")]),
      node("Admin", [node("Company Doc"), node("Admin Orders / Official Letters"), node("Attendance"), node("HR"), node("Assets Docs"), node("Utilities")]),
      node("Finance & Accounting", [node("Accounting"), node("Audit")]),
      node("Material Management", [node("Non-Accounting Stock Issue Note"), node("Financial Issue Note"), node("Asset Issue Note"), node("Non-Accounting Receipt Note"), node("Financial Receipt Note"), node("Transfer Note")]),
      node("Audit", [node("Contracts", [node("Supply Payments"), node("Executed Work Payments")]), node("Financial Settlement"), node("Bonds & Guarantees")]),
      node("Tender & Proposal"),
      node("Projects", [node("Completed Projects"), node("Ongoing Projects"), node("Standard Construction Docs")]),
      node("ISO")
    ], true)
  ],
  projects: [
    node("Projects", [
      node("Project_001", cloneNodes(projectFolderStructure), true),
      node("Project_002", cloneNodes(projectFolderStructure)),
      node("Project_003", cloneNodes(projectFolderStructure)),
      node("Project_004", cloneNodes(projectFolderStructure))
    ], true)
  ]
};

function icon(name) {
  if (legacyIcons[name]) {
    return `<span class="legacy-icon legacy-${name}" aria-hidden="true">${legacyIcons[name]}</span>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || ""}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach(el => { el.innerHTML = icon(el.dataset.icon); });
}

function statusClass(status) {
  return status === "Approved" ? "approved" : status === "Under Review" ? "review" : status === "Rejected" ? "rejected" : "draft";
}

function fileCell(doc, favorite = false) {
  return `<span class="file-name">${favorite ? '<span style="color:#f8a51b">' + icon("bookmark") + '</span>' : ""}<span class="file-icon ${doc.ext}">${doc.ext.toUpperCase().slice(0,3)}</span>${doc.name}</span>`;
}

function renderTable(id, rows, mode = "full") {
  const table = document.getElementById(id);
  if (!table) return;
  const headers = mode === "recent"
    ? ["Document Name", "Location", "Department", "Uploaded By", "Uploaded On", "Status", ""]
    : ["Document Name", "Project", "Reference No.", "Subject / Title", "Type", "Rev.", "Status", "Document Date", "Modified By", "Size", ""];
  table.innerHTML = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${
    rows.map(doc => mode === "recent" ? `
      <tr data-doc="${doc.id}">
        <td>${fileCell(doc)}</td><td><span class="status draft">${doc.project === "Project_001" ? "Project Documents" : "Company Records"}</span></td><td>${doc.type}</td><td><span class="person"><i>${doc.by.split(" ").map(s => s[0]).join("")}</i>${doc.by}</span></td><td>${doc.id ? "Today, 9:30 AM" : "2 hrs ago"}</td><td><span class="status ${statusClass(doc.status)}">${doc.status}</span></td><td><button class="kebab" data-action="row-menu">${icon("more-vertical")}</button></td>
      </tr>` : `
      <tr data-doc="${doc.id}">
        <td>${fileCell(doc, mode === "favorites")}</td><td>${doc.project}</td><td>${doc.ref}</td><td>${doc.subject}</td><td>${doc.type}</td><td>${doc.rev}</td><td><span class="status ${statusClass(doc.status)}">${doc.status}</span></td><td>${doc.date}</td><td>${doc.by}</td><td>${doc.size}</td><td><button class="kebab" data-action="row-menu">${icon("more-vertical")}</button></td>
      </tr>`).join("")
  }</tbody>`;
}

function renderMiniApprovals() {
  const recentApprovals = approvals.slice(0, 4);
  document.getElementById("pendingApprovals").innerHTML = `
    <div class="approval-head-mini"><span>Document</span><span>Status</span><span>Uploaded By</span></div>
  ` + recentApprovals.map(item => `
    <div class="approval-row">
      <span class="file-icon ${item.ext}">${item.ext.toUpperCase()}</span>
      <span><b>${item.title}</b><small>${item.reference}</small></span>
      <span class="status review approval-status">${item.stage}</span>
      <span class="person"><i>${item.initials}</i>${item.uploadedBy}</span>
    </div>`).join("") + `<button class="link-button" data-view-link="approvals">View all approvals ${icon("arrow-right")}</button>`;
}

function renderKanban() {
  const buckets = ["approvalCol1", "approvalCol2", "approvalCol3"];
  buckets.forEach(id => { document.getElementById(id).innerHTML = ""; });
  approvals.forEach((item, index) => {
    document.getElementById(buckets[index % 3]).innerHTML += `
      <article class="approval-card">
        <span class="file-name"><span class="file-icon ${item.ext}">${item.ext.toUpperCase()}</span>${item.title}</span>
        <small>${item.reference} | Uploaded by ${item.uploadedBy}</small>
        <span class="status review">${item.stage}</span>
        <div class="approval-actions">
          <button class="btn ghost" data-action="preview-approval" data-approval-id="${item.id}">Preview</button>
          <button class="btn primary" data-action="approve" data-approval-id="${item.id}">Approve</button>
          <button class="btn danger" data-action="reject-approval" data-approval-id="${item.id}">Reject</button>
        </div>
      </article>`;
  });
}

function renderTree(id, items) {
  const walk = (nodes, level = 0, parents = []) => nodes.map(item => {
    const hasChildren = item.children && item.children.length;
    const path = [...parents, item.label].join(" > ");
    const childHtml = hasChildren && item.open ? walk(item.children, level + 1, [...parents, item.label]) : "";
    const isRoot = level === 0;
    const visualIcon = isRoot ? (item.label === "Company" ? "project-box" : "briefcase") : "folder";
    return `
      <button class="tree-node indent-${Math.min(level, 5)} level-${Math.min(level, 5)} ${isRoot ? "root-node" : ""} ${item.active ? "active" : ""}" data-folder="${item.label}" data-path="${path}" data-has-children="${hasChildren ? "true" : "false"}">
        <span class="tree-caret">${hasChildren ? icon(item.open ? "chevron-down" : "chevron-right") : ""}</span><span class="tree-folder-icon">${icon(visualIcon)}</span><span class="tree-label">${item.label}</span>
      </button>${childHtml}`;
  }).join("");
  document.getElementById(id).innerHTML = walk(items);
}

function findTreeNode(nodes, path) {
  for (const item of nodes) {
    const currentPath = arguments[2] ? `${arguments[2]} > ${item.label}` : item.label;
    if (currentPath === path) return item;
    const found = item.children?.length ? findTreeNode(item.children, path, currentPath) : null;
    if (found) return found;
  }
  return null;
}

function markTreeActive(nodes, activePath, parent = "") {
  nodes.forEach(item => {
    const currentPath = parent ? `${parent} > ${item.label}` : item.label;
    item.active = currentPath === activePath;
    if (item.children?.length) markTreeActive(item.children, activePath, currentPath);
  });
}

function treeHasActive(nodes) {
  return nodes.some(item => item.active || (item.children?.length && treeHasActive(item.children)));
}

function currentUploadRoot() {
  if (document.querySelector('input[name="dept"]:checked')?.value === "Company") return trees.general;
  const selectedProject = document.getElementById("uploadProjectSelect")?.value || "Project_001";
  return [node("Projects", [node(selectedProject, cloneNodes(projectFolderStructure), true)], true)];
}

function renderFolderBrowser() {
  folderBrowserRoot = folderBrowserRoot || currentUploadRoot();
  const selectedPath = document.getElementById("uploadPath").dataset.path;
  if (!treeHasActive(folderBrowserRoot) && selectedPath) {
    markTreeActive(folderBrowserRoot, selectedPath);
  }
  renderTree("folderBrowserTree", folderBrowserRoot);
  hydrateIcons(document.getElementById("folderBrowserTree"));
}

function setUploadPath(path) {
  const container = document.getElementById("uploadPath");
  container.dataset.path = path;
  container.classList.toggle("locked", uploadPathLocked);
  container.innerHTML = `${path.split(" > ").join(` ${icon("chevron-right")} `)} ${
    uploadPathLocked
      ? `<span class="locked-path">${icon("lock")}Selected location</span>`
      : `<button type="button" class="btn outline-accent small" data-action="open-folder-browser"><span data-icon="folder-open"></span>Browse</button>`
  }`;
  hydrateIcons(container);
}

function activeTreePath(treeId, fallback) {
  return document.querySelector(`#${treeId} .tree-node.active`)?.dataset.path || fallback;
}

function prepareUploadDialog(source = "home") {
  const deptRadios = [...document.querySelectorAll('input[name="dept"]')];
  const projectField = document.getElementById("projectSelectField");
  const projectSelect = document.getElementById("uploadProjectSelect");
  uploadPathLocked = source !== "home";
  deptRadios.forEach(radio => { radio.disabled = uploadPathLocked; });
  projectSelect.disabled = uploadPathLocked;

  if (source === "documents") {
    deptRadios.find(radio => radio.value === "Company").checked = true;
    projectField.classList.add("hidden");
    setUploadPath(activeTreePath("generalTree", "Company > Quality > Inspection & Test Plans"));
  } else if (source === "projects") {
    deptRadios.find(radio => radio.value === "Project").checked = true;
    projectField.classList.remove("hidden");
    const path = activeTreePath("projectTree", `Projects > ${projectSelect.value} > Quality > Inspection & Test Plan`);
    const projectMatch = path.match(/Project_\d+/);
    if (projectMatch) projectSelect.value = projectMatch[0];
    setUploadPath(path);
  } else {
    deptRadios.find(radio => radio.value === "Project").checked = true;
    projectField.classList.remove("hidden");
    setUploadPath(`Projects > ${projectSelect.value} > Quality > Inspection & Test Plan`);
  }

  document.getElementById("uploadDialog").showModal();
}

function openDocumentDetailsFromAnyView(row) {
  const doc = documents[Number(row.dataset.doc)];
  selectedDocument = doc;
  if (row.closest("#view-projects")) {
    openDetails("projectDetails", doc);
    return;
  }
  if (row.closest("#view-favorites")) {
    openDetails("bookmarkDetails", doc);
    return;
  }
  if (!row.closest("#view-documents")) showView("documents");
  openDetails("detailsPanel", doc);
}

function closeRowMenu() {
  const menu = document.getElementById("rowActionMenu");
  menu.classList.remove("open");
  menu.setAttribute("aria-hidden", "true");
}

function openRowMenu(button, doc) {
  selectedDocument = doc;
  const menu = document.getElementById("rowActionMenu");
  const rect = button.getBoundingClientRect();
  menu.innerHTML = `
    <button data-action="download">${icon("download")}Download</button>
    <button data-action="preview">${icon("eye")}Preview</button>
    <button data-action="share">${icon("share")}Share</button>
  `;
  menu.style.top = `${rect.bottom + 8}px`;
  menu.style.left = `${Math.max(12, Math.min(rect.left - 150, window.innerWidth - 230))}px`;
  menu.classList.add("open");
  menu.setAttribute("aria-hidden", "false");
  hydrateIcons(menu);
}

function renderBookmarks() {
  if (!document.getElementById("favoritesTable")) return;
  const query = (document.getElementById("bookmarkSearch")?.value || "").toLowerCase();
  const status = document.getElementById("bookmarkStatusFilter")?.value || "";
  const type = document.getElementById("bookmarkTypeFilter")?.value || "";
  const project = document.getElementById("bookmarkProjectFilter")?.value || "";
  const rows = documents.filter(doc =>
    doc.favorite &&
    (!query || Object.values(doc).join(" ").toLowerCase().includes(query)) &&
    (!status || doc.status === status) &&
    (!type || doc.type === type) &&
    (!project || doc.project === project)
  );
  renderTable("favoritesTable", rows, "favorites");
  hydrateIcons(document.getElementById("favoritesTable"));
  document.getElementById("favoritesCount").textContent = rows.length
    ? `Showing 1 to ${rows.length} of ${rows.length} bookmarked documents`
    : "No bookmarked documents found";
}

function updateReportKpis() {
  const area = document.getElementById("reportAreaFilter")?.value || "Project Records";
  const department = document.getElementById("reportDepartmentFilter")?.value || "All Departments";
  const project = document.getElementById("reportProjectFilter")?.value || "All Projects";
  const status = document.getElementById("reportStatusFilter")?.value || "All Statuses";
  const period = document.getElementById("reportPeriodFilter")?.value || "This Month";
  let total = 124;
  let approved = 86;
  let review = 24;
  let pending = 14;
  if (area === "Company Records") {
    total = 58; approved = 39; review = 12; pending = 7;
  }
  if (department === "Quality") {
    total = 32; approved = 22; review = 7; pending = 3;
  } else if (department === "HSE") {
    total = 15; approved = 11; review = 2; pending = 2;
  } else if (department === "Admin") {
    total = 18; approved = 13; review = 3; pending = 2;
  } else if (department === "Finance & Accounting") {
    total = 22; approved = 15; review = 4; pending = 3;
  } else if (department === "Technical") {
    total = 28; approved = 18; review = 6; pending = 4;
  } else if (department === "Contracts") {
    total = 18; approved = 14; review = 3; pending = 1;
  }
  if (area === "Project Records" && project === "Project_001") {
    total = 46; approved = 32; review = 9; pending = 5;
  } else if (area === "Project Records" && project === "Project_002") {
    total = 21; approved = 13; review = 5; pending = 3;
  } else if (area === "Project Records" && project === "Project_003") {
    total = 16; approved = 10; review = 4; pending = 2;
  } else if (area === "Project Records" && project === "Project_004") {
    total = 13; approved = 8; review = 3; pending = 2;
  }
  if (status !== "All Statuses") {
    const focused = { Approved: approved, "Under Review": review, Pending: pending, Rejected: 4 }[status] || total;
    total = focused;
    approved = status === "Approved" ? focused : Math.max(0, Math.round(focused * 0.18));
    review = status === "Under Review" ? focused : Math.max(0, Math.round(focused * 0.14));
    pending = status === "Pending" ? focused : Math.max(0, Math.round(focused * 0.1));
  }
  const periodFactor = { "This Week": 0.32, "Last 30 Days": 0.82, "This Year": 2.4 }[period] || 1;
  total = Math.max(1, Math.round(total * periodFactor));
  approved = Math.max(0, Math.round(approved * periodFactor));
  review = Math.max(0, Math.round(review * periodFactor));
  pending = Math.max(0, Math.round(pending * periodFactor));
  document.getElementById("reportTotal").textContent = total;
  document.getElementById("reportApproved").textContent = approved;
  document.getElementById("reportReview").textContent = review;
  document.getElementById("reportPending").textContent = pending;
  document.getElementById("reportTotalNote").textContent = period === "This Year" ? "Year to date" : `Filtered by ${period.toLowerCase()}`;
  document.getElementById("reportApprovedNote").textContent = `${Math.round((approved / Math.max(total, 1)) * 100)}% completion`;
  document.getElementById("reportReviewNote").textContent = status === "Under Review" ? "Selected status" : "With approvers";
  document.getElementById("reportPendingNote").textContent = status === "Pending" ? "Selected status" : "Awaiting action";
}

function syncReportFilters() {
  const isProject = document.getElementById("reportAreaFilter")?.value === "Project Records";
  document.getElementById("reportProjectFilter")?.classList.toggle("hidden", !isProject);
  updateReportKpis();
}

function renderSearchResults() {
  const query = (document.getElementById("globalSearch")?.value || "").trim().toLowerCase();
  const status = document.getElementById("searchStatusFilter")?.value || "";
  const type = document.getElementById("searchTypeFilter")?.value || "";
  const project = document.getElementById("searchProjectFilter")?.value || "";
  const rows = documents.filter(doc =>
    (!query || Object.values(doc).join(" ").toLowerCase().includes(query)) &&
    (!status || doc.status === status) &&
    (!type || doc.type === type) &&
    (!project || doc.project === project)
  );
  renderTable("searchTable", rows, "search");
  hydrateIcons(document.getElementById("searchTable"));
  document.getElementById("searchSummary").textContent = query
    ? `Found ${rows.length} results for "${document.getElementById("globalSearch").value.trim()}".`
    : "Search documents, folders and projects.";
  document.getElementById("searchCount").textContent = rows.length
    ? `Showing 1 to ${rows.length} of ${rows.length} results`
    : "No search results found";
}

function renderDetails(targetId, doc = documents[0]) {
  const createdDate = doc.date;
  const modifiedDate = doc.status === "Draft" ? doc.date : "21 May 2024";
  const sensitivity = doc.type === "Main Contract" ? "Confidential" : "Internal";
  const category = doc.type === "Inspection Plan" ? "Quality" : doc.type;
  const tags = [doc.type, doc.project, doc.ref.split("-")[1] || "Document"].filter(Boolean).join(", ");
  const location = doc.project === "Project_001"
    ? "Projects > Project_001 > Quality > Inspection & Test Plan"
    : "Company Records > Quality > Inspection & Test Plans";
  document.getElementById(targetId).innerHTML = `
    <div class="details-header"><h2>Document Details</h2><button class="icon-button" data-action="close-details">${icon("x")}</button></div>
    <div class="details-card">
      <h3>Descriptive Metadata</h3>
      <div class="detail-row"><span>Ref. No.</span><b>${doc.ref}</b></div>
      <div class="detail-row"><span>Name</span><b>${doc.name}</b></div>
      <div class="detail-row"><span>Title / Description</span><b>${doc.subject}</b></div>
      <div class="detail-row"><span>Department / Category</span><b>${category}</b></div>
      <div class="detail-row"><span>Tags / Keywords</span><b>${tags}</b></div>
      <div class="detail-row"><span>Sensitivity / Classification</span><span class="status draft">${sensitivity}</span></div>
      <div class="detail-row"><span>Folder / Location</span><b>${location}</b></div>
      <div class="detail-row"><span>Project / Records Area</span><b>${doc.project}</b></div>
    </div>
    <div class="details-card">
      <h3>Technical & Structural Metadata</h3>
      <div class="detail-row"><span>Type / Extension</span><b>${doc.ext.toUpperCase()}</b></div>
      <div class="detail-row"><span>Size</span><b>${doc.size}</b></div>
      <div class="detail-row"><span>Version Number</span><b>Revision ${doc.rev}</b></div>
      <div class="detail-row"><span>Version History</span><b>Auto captured</b></div>
    </div>
    <div class="details-card">
      <h3>Administrative & Security Metadata</h3>
      <div class="detail-row"><span>Status</span><span class="status ${statusClass(doc.status)}">${doc.status}</span></div>
      <div class="detail-row"><span>Created By</span><b>${doc.by}</b></div>
      <div class="detail-row"><span>Creation Date</span><b>${createdDate}</b></div>
      <div class="detail-row"><span>Modified By</span><b>${doc.by}</b></div>
      <div class="detail-row"><span>Modification Date</span><b>${modifiedDate}</b></div>
      <div class="detail-row"><span>Document Date</span><b>${doc.date}</b></div>
      <div class="detail-row"><span>Activity Log</span><b>Captured in version history</b></div>
    </div>
    <div class="details-card">
      <h3>Approval Details</h3>
      <div class="detail-row"><span>Workflow</span><b>${doc.type === "Inspection Plan" ? "Quality Docs Approval" : "Project Documents Approval"}</b></div>
      <div class="detail-row"><span>Current Stage</span><b>${doc.status === "Approved" ? "Final Approval" : "Manager Review"}</b></div>
      <div class="detail-row"><span>Due Date</span><b>22 May 2024</b></div>
      <div class="detail-row"><span>Approved By</span><b>Ahmed Khan</b></div>
    </div>
    <div class="details-card">
      <h3>Version History</h3>
      <div class="detail-row"><span>Current Version</span><b>Revision ${doc.rev}</b></div>
      <div class="detail-row"><span>Activity Records</span><b>3 records available</b></div>
      <button class="detail-link" data-action="version-history">${icon("history")}View version history</button>
    </div>
    <div class="detail-actions">
      <button class="btn ghost" data-action="download">${icon("download")}Download</button>
      <button class="btn ghost" data-action="preview">${icon("eye")}Preview</button>
      <button class="btn ghost" data-action="share">${icon("share")}Share</button>
    </div>`;
}

function renderVersionHistory(doc = selectedDocument) {
  const versions = [
    { rev: doc.rev, status: doc.status, by: doc.by, date: doc.date, note: "Current approved document in active library." },
    { rev: doc.rev === "A" ? "0" : "A", status: "Under Review", by: "Sara Ali", date: "18 May 2024", note: "Reviewed and routed for department approval." },
    { rev: "Draft 02", status: "Draft", by: "Fatima Noor", date: "17 May 2024", note: "Updated document title, reference details and attachments." },
    { rev: "Draft 01", status: "Draft", by: "Ahmed Khan", date: "16 May 2024", note: "Initial upload with metadata and folder path captured." }
  ];
  document.getElementById("versionTitle").textContent = `Version History - ${doc.ref}`;
  document.getElementById("versionList").innerHTML = versions.map(item => `
    <article class="version-item">
      <span class="version-badge">${item.rev}</span>
      <div>
        <h3>${doc.name}</h3>
        <p>${item.note}</p>
        <small>Updated by ${item.by} on ${item.date}</small>
      </div>
      <span class="status ${statusClass(item.status)}">${item.status}</span>
    </article>
  `).join("");
  hydrateIcons(document.getElementById("versionList"));
}

function openDetails(panelId, doc) {
  selectedDocument = doc;
  const panel = document.getElementById(panelId);
  renderDetails(panelId, doc);
  hydrateIcons(panel);
  panel.classList.add("open");
  panel.closest(".split-layout")?.classList.add("details-open");
  panel.closest(".bookmark-layout")?.classList.add("details-open");
}

function closeDetails(panel) {
  const detailsPanel = panel || document.querySelector(".details-panel.open");
  if (!detailsPanel) return;
  detailsPanel.classList.remove("open");
  detailsPanel.closest(".split-layout")?.classList.remove("details-open");
  detailsPanel.closest(".bookmark-layout")?.classList.remove("details-open");
}

function renderDocumentPreview(doc = selectedDocument) {
  document.getElementById("previewTitle").textContent = doc.name;
  document.getElementById("previewContent").innerHTML = `
    <div class="preview-ribbon">SAS DMS</div>
    <div class="document-preview-sheet">
      <div class="preview-doc-head">
        <span class="file-icon ${doc.ext}">${doc.ext.toUpperCase()}</span>
        <div>
          <h2>${doc.subject}</h2>
          <p>${doc.name} | ${doc.ref} | Revision ${doc.rev}</p>
        </div>
      </div>
      <div class="document-paper">
        <h3>${doc.type}</h3>
        <p><b>Project:</b> ${doc.project}</p>
        <p><b>Document Date:</b> ${doc.date}</p>
        <p><b>Prepared / Modified By:</b> ${doc.by}</p>
        <div class="preview-lines"></div>
      </div>
    </div>
  `;
}

function openShareDialog(doc = selectedDocument) {
  const link = `https://dms.sas-demo.local/document/${encodeURIComponent(doc.ref)}`;
  document.getElementById("shareLink").value = link;
  document.getElementById("shareEmployee").value = "Ahmed Khan";
  document.getElementById("shareDialog").showModal();
}

function renderPreview(data = documents[0]) {
  const isApproval = Boolean(data.uploadedBy);
  const item = isApproval ? data : {
    title: data.name,
    reference: data.ref,
    stage: data.status,
    uploadedBy: data.by,
    initials: data.by.split(" ").map(part => part[0]).join(""),
    ext: data.ext,
    documentType: data.type,
    department: data.type === "Inspection Plan" ? "Quality" : "Projects",
    location: `${data.project} > Quality > Inspection & Test Plan`,
    uploadedOn: `${data.date} 10:30`,
    size: data.size,
    revision: data.rev,
    confidentiality: "Internal Use",
    remarks: data.subject,
    approvalPath: "Project Manager > Quality Manager > Construction Director"
  };
  document.getElementById("previewTitle").textContent = item.title;
  document.getElementById("previewContent").innerHTML = `
    <div class="preview-ribbon">SAS DMS</div>
    <div class="preview-summary">
      <span class="file-icon ${item.ext}">${item.ext.toUpperCase()}</span>
      <div>
        <h2>${item.title}</h2>
        <p>${item.reference}</p>
      </div>
      <span class="status review">${item.stage}</span>
    </div>
    <div class="preview-meta-grid">
      <div><span>Document Type</span><b>${item.documentType}</b></div>
      <div><span>Department</span><b>${item.department}</b></div>
      <div><span>Revision</span><b>${item.revision}</b></div>
      <div><span>Confidentiality</span><b>${item.confidentiality}</b></div>
      <div><span>Uploaded By</span><b><i class="preview-avatar">${item.initials}</i>${item.uploadedBy}</b></div>
      <div><span>Uploaded On</span><b>${item.uploadedOn}</b></div>
      <div><span>File Size</span><b>${item.size}</b></div>
      <div><span>Current Stage</span><b>${item.stage}</b></div>
    </div>
    <div class="preview-block">
      <span>Folder Path</span>
      <b>${item.location}</b>
    </div>
    <div class="preview-block">
      <span>Description / Remarks</span>
      <b>${item.remarks}</b>
    </div>
    <div class="preview-block">
      <span>Approval Workflow</span>
      <b>${item.approvalPath}</b>
    </div>
  `;
}

function approvalSummaryHtml(item) {
  return `
    <div><span>Document Name</span><b>${item.title}</b></div>
    <div><span>Reference Number</span><b>${item.reference}</b></div>
    <div><span>Document Type</span><b>${item.documentType}</b></div>
    <div><span>Department</span><b>${item.department}</b></div>
    <div><span>Current Stage</span><b>${item.stage}</b></div>
    <div><span>Uploaded By</span><b>${item.uploadedBy}</b></div>
    <div><span>Uploaded On</span><b>${item.uploadedOn}</b></div>
    <div><span>Location</span><b>${item.location}</b></div>
  `;
}

function openRejectDialog(item) {
  pendingRejection = item;
  document.getElementById("rejectSummary").innerHTML = approvalSummaryHtml(item);
  document.getElementById("rejectComment").value = "";
  document.getElementById("rejectDialog").showModal();
}

function openApproveDialog(item) {
  pendingApproval = item;
  document.getElementById("approveSummary").innerHTML = approvalSummaryHtml(item);
  document.getElementById("approveComment").value = "";
  document.getElementById("approveDialog").showModal();
}

function applyFilters() {
  const q = (document.getElementById("folderSearch")?.value || "").toLowerCase();
  const status = document.getElementById("statusFilter")?.value || "";
  const type = document.getElementById("typeFilter")?.value || "";
  const project = document.getElementById("projectFilter")?.value || "";
  const rows = documents.filter(doc =>
    (!q || Object.values(doc).join(" ").toLowerCase().includes(q)) &&
    (!status || doc.status === status) &&
    (!type || doc.type === type) &&
    (!project || doc.project === project)
  );
  renderTable("documentsTable", rows);
  document.getElementById("documentCount").textContent = `Showing 1 to ${rows.length} of ${rows.length} items`;
  hydrateIcons(document.getElementById("documentsTable"));
}

function showView(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(`view-${view}`)?.classList.add("active");
  document.querySelectorAll(".nav-item, .top-nav-item").forEach(n => n.classList.toggle("active", n.dataset.view === view));
  document.querySelector(".app-shell").classList.remove("mobile-open");
}

function setSidebarState(state) {
  const shell = document.querySelector(".app-shell");
  shell.dataset.sidebar = state;
  const iconName = state === "closed" ? "chevrons-right" : "chevrons-left";
  document.getElementById("sidebarToggleTop").innerHTML = icon(iconName);
  hydrateIcons(document.getElementById("sidebarToggleTop"));
}

function openGlobalSearch() {
  const menu = document.getElementById("globalSearchMenu");
  const popover = document.getElementById("globalSearchPopover");
  const toggle = document.getElementById("globalSearchToggle");
  if (!menu || !popover || !toggle) return;
  menu.classList.add("open");
  popover.setAttribute("aria-hidden", "false");
  toggle.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => document.getElementById("globalSearch")?.focus());
}

function closeGlobalSearch() {
  const menu = document.getElementById("globalSearchMenu");
  const popover = document.getElementById("globalSearchPopover");
  const toggle = document.getElementById("globalSearchToggle");
  if (!menu || !popover || !toggle) return;
  menu.classList.remove("open");
  popover.setAttribute("aria-hidden", "true");
  toggle.setAttribute("aria-expanded", "false");
}

function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

const settingsSelects = {
  users: ["Jane Doe", "Ahmed Khan", "Sara Ali", "John Doe", "Fatima Noor", "Mohammed Raza", "Lisa Ray"],
  permissions: ["Full Control", "Contributor", "Upload", "View", "Download", "Read"],
  areas: ["Company Records", "Project"],
  departments: ["Quality", "HSE", "Admin", "Finance & Accounting", "Material Management", "Technical", "Project DCC", "Accounting"],
  projects: ["Project_001", "Project_002", "Project_003", "Project_004"],
  folders: [
    "Company Records > Quality > Inspection & Test Plans",
    "Company Records > HSE > Reports",
    "Company Records > Admin > HR",
    "Projects > Project_001 > Quality > Inspection & Test Plan",
    "Projects > Project_001 > Technical > Shop Drawings",
    "Projects > Project_001 > Contracts > Main Contract"
  ]
};

const folderCatalog = {
  General: {
    Quality: ["Project Quality Plan (General)", "Construction Quality Plan", "Inspection & Test Plans"],
    HSE: ["Policies & Plans", "Standard Operating Procedures", "Safe Work Method Statements", "Forms & Formats", "Reports"],
    Admin: ["Company Doc", "Admin Orders / Official Letters", "Attendance", "HR", "Assets Docs", "Utilities"],
    "Finance & Accounting": ["Accounting", "Audit"],
    "Material Management": ["Non-Accounting Stock Issue Note", "Financial Issue Note", "Asset Issue Note", "Non-Accounting Receipt Note", "Financial Receipt Note", "Transfer Note"],
    Audit: ["Contracts", "Financial Settlement", "Bonds & Guarantees"],
    Projects: ["Completed Projects", "Ongoing Projects", "Standard Construction Docs"],
    ISO: ["Default Folder"]
  },
  Project: {
    Quality: ["Inspection & Test Plan", "Project Quality Plan", "RFI's", "Reports", "Hand Over"],
    HSE: ["Project HSE Plan", "Permits", "Reports"],
    Admin: ["Employee", "Timesheet"],
    Planning: ["Schedule", "Reports", "QS & Invoices", "Photos"],
    "Material Control": ["Local Material Store", "Project Materials", "MRR", "MOR", "Shipment Docs", "Others"],
    Contracts: ["Main Contract", "Material Supply", "Work Execution"],
    Construction: ["Construction / Execution Plan", "Method Statements of All Disciplines", "Procedures of All Disciplines"],
    Technical: ["Technical Proposals", "Shop Drawings"],
    "Project DCC": ["Project Correspondence Letters", "Document Transmittal", "Project Documents and Specification", "Project Drawings", "Project Generated Documents of All Disciplines"],
    Accounting: ["Salaries", "Maintenance", "Food Expenses", "SubCon Invoices", "Oil & Fuel", "Workers Wages", "Machineries Rental", "Utilities / Others"]
  }
};

function options(items, selected = "") {
  return items.map(item => `<option${item === selected ? " selected" : ""}>${item}</option>`).join("");
}

function multiOptions(items, selected = []) {
  return items.map(item => `<option${selected.includes(item) ? " selected" : ""}>${item}</option>`).join("");
}

function field(label, control) {
  return `<label><span class="field-label">${label}</span>${control}</label>`;
}

function peoplePicker(selected = []) {
  return `<div class="people-picker" role="group" aria-label="People picker">
    <div class="people-chips">${selected.map(name => `<span>${name}<button type="button" aria-label="Remove ${name}">x</button></span>`).join("")}</div>
    <input list="peopleOptions" placeholder="Search and add user">
    <datalist id="peopleOptions">${settingsSelects.users.map(name => `<option value="${name}"></option>`).join("")}</datalist>
  </div>`;
}

function settingsFolderChecks(scope = "General") {
  const catalogKey = scope === "Company Records" ? "General" : scope;
  const label = scope === "General" ? "Company Records" : scope;
  const catalog = folderCatalog[catalogKey];
  const departments = Object.keys(catalog);
  const folderNames = departments.flatMap(dept => catalog[dept].map(folder => `${dept} > ${folder}`));
  return `
    <section class="settings-dialog-section">
      <h3>${label} Departments</h3>
      <div class="check-grid">
        ${departments.map((dept, index) => `<label><input type="checkbox"${index < 2 ? " checked" : ""}> ${dept}</label>`).join("")}
      </div>
    </section>
    <section class="settings-dialog-section">
      <h3>${label} Folders</h3>
      <div class="check-grid">
        ${folderNames.slice(0, 10).map((folder, index) => `<label><input type="checkbox"${index < 3 ? " checked" : ""}> ${folder}</label>`).join("")}
      </div>
    </section>`;
}

function existingFolderList(area = "Project", department = "Quality") {
  const folders = folderCatalog[area]?.[department] || [];
  const areaLabel = area === "General" ? "Company Records" : area;
  return `<div class="existing-folder-list"><b>Existing ${areaLabel} folders under ${department}</b>${folders.map(folder => `<span>${folder}</span>`).join("")}</div>`;
}

function openSettingsDialog(actionName) {
  const dialog = document.getElementById("settingsDialog");
  const title = document.getElementById("settingsDialogTitle");
  const subtitle = document.getElementById("settingsDialogSubtitle");
  const body = document.getElementById("settingsDialogBody");
  const editMode = actionName.includes("edit");
  const content = {
    "settings-invite-user": {
      title: "Add User Access",
      subtitle: "Select multiple users, departments, folders and permission level.",
      html: `
        <div class="settings-form-grid">
          ${field("Users", peoplePicker(["Jane Doe", "Lisa Ray"]))}
          ${field("Access Scope", `<select id="accessScopeSelect">${options(["Company Records", "Project"], "Company Records")}</select>`)}
          ${field("Permission Level", `<select>${options(settingsSelects.permissions, "Contributor")}</select>`)}
          ${field("Status", `<select>${options(["Active", "Inactive"])}</select>`)}
        </div><div id="accessFolderPicker">${settingsFolderChecks("Company Records")}</div>`
    },
    "settings-edit-access": {
      title: "Edit User Access",
      subtitle: "Update folder-level access for the selected user.",
      html: `
        <div class="settings-form-grid">
          ${field("Users", peoplePicker(["Ahmed Khan", "Sara Ali"]))}
          ${field("Access Scope", `<select id="accessScopeSelect">${options(["Project", "Company Records"], "Project")}</select>`)}
          ${field("Permission Level", `<select>${options(settingsSelects.permissions, "Full Control")}</select>`)}
          ${field("Status", `<select>${options(["Active", "Inactive"], "Active")}</select>`)}
        </div><div id="accessFolderPicker">${settingsFolderChecks("Project")}</div>`
    },
    "settings-create-project": {
      title: "Add Project",
      subtitle: "Create the project record and assign initial permissions.",
      html: `
        <div class="settings-form-grid">
          ${field("Project Name", `<input value="Project Alpha">`)}
          ${field("Project Number", `<input value="PRJ-005">`)}
          ${field("Client", `<input value="New Client LLC">`)}
          ${field("Project Status", `<select>${options(["Ongoing", "Completed", "On Hold"])}</select>`)}
        </div>
        <section class="settings-dialog-section">
          <h3>Project Members</h3>
          <div class="settings-form-grid">
            ${field("Users", peoplePicker(["Sara Ali", "John Doe", "Fatima Noor"]))}
            ${field("Status", `<select>${options(["Active", "Inactive"])}</select>`)}
          </div>
        </section>`
    },
    "settings-edit-project-members": {
      title: "Edit Project Members",
      subtitle: "Project details are locked. Only member permissions can be updated.",
      html: `
        <section class="settings-dialog-section">
          <h3>Project_001 Members</h3>
          <div class="settings-form-grid">
            ${field("Users", peoplePicker(["Ahmed Khan", "Sara Ali", "John Doe", "Fatima Noor"]))}
            ${field("Status", `<select>${options(["Active", "Inactive"])}</select>`)}
          </div>
        </section>
        <table class="mini-settings-table"><thead><tr><th>Current Members</th></tr></thead><tbody><tr><td>Ahmed Khan, Sara Ali, John Doe, Fatima Noor</td></tr></tbody></table>`
    },
    "settings-add-workflow": {
      title: "Create Workflow",
      subtitle: "Select document area, department, folder and two approval levels.",
      html: workflowFields()
    },
    "settings-edit-workflow": {
      title: "Edit Workflow",
      subtitle: "Update the selected workflow approvers.",
      html: workflowFields(true)
    },
    "settings-create-folder": {
      title: "Add Folder",
      subtitle: "Create a folder under the selected hierarchy level.",
      html: `
        <div class="settings-form-grid">
          ${field("Document Area", `<select id="folderAreaSelect">${options(["Project", "Company Records"], "Project")}</select>`)}
          ${field("Department", `<select id="folderDepartmentSelect">${options(Object.keys(folderCatalog.Project), "Technical")}</select>`)}
          ${field("New Folder Name", `<input value="As Built Drawings">`)}
        </div>
        <section class="settings-dialog-section" id="existingFolderPreview">${existingFolderList("Project", "Technical")}</section>`
    },
    "settings-create-department": {
      title: "Create Department",
      subtitle: "Add a new department under General or Project documents.",
      html: departmentFields()
    },
    "settings-add-admin": {
      title: "Add Admin User",
      subtitle: "Only listed admins can see the Settings icon.",
      html: adminFields()
    },
    "settings-edit-admin": {
      title: "Edit Admin User",
      subtitle: "Update Settings module visibility for this admin.",
      html: adminFields(true)
    }
  }[actionName];
  if (!content) return;
  title.textContent = content.title;
  subtitle.textContent = content.subtitle;
  body.innerHTML = content.html;
  const folderArea = body.querySelector("#folderAreaSelect");
  const folderDepartment = body.querySelector("#folderDepartmentSelect");
  const accessScope = body.querySelector("#accessScopeSelect");
  const accessFolderPicker = body.querySelector("#accessFolderPicker");
  if (accessScope && accessFolderPicker) {
    accessScope.addEventListener("change", () => {
      accessFolderPicker.innerHTML = settingsFolderChecks(accessScope.value);
    });
  }
  const refreshFolderPreview = (resetDepartments = false) => {
    if (!folderArea || !folderDepartment) return;
    const area = folderArea.value;
    const catalogKey = area === "Company Records" ? "General" : area;
    const departments = Object.keys(folderCatalog[catalogKey] || {});
    if (resetDepartments || !departments.includes(folderDepartment.value)) {
      folderDepartment.innerHTML = options(departments, departments[0]);
    }
    const preview = body.querySelector("#existingFolderPreview");
    if (preview) preview.innerHTML = existingFolderList(catalogKey, folderDepartment.value);
  };
  if (folderArea && folderDepartment) {
    folderArea.addEventListener("change", () => refreshFolderPreview(true));
    folderDepartment.addEventListener("change", () => refreshFolderPreview(false));
  }
  document.getElementById("settingsDialogSave").innerHTML = `${icon("check")}${editMode ? "Update" : "Save"}`;
  hydrateIcons(dialog);
  dialog.showModal();
}

function workflowFields(edit = false) {
  return `<div class="settings-form-grid">
    ${field("Document Area", `<select>${options(settingsSelects.areas, edit ? "Project" : "Company Records")}</select>`)}
    ${field("Department", `<select>${options(settingsSelects.departments, edit ? "Quality" : "HSE")}</select>`)}
    ${field("Folder", `<select>${options(settingsSelects.folders, edit ? "Projects > Project_001 > Quality > Inspection & Test Plan" : "Company Records > HSE > Reports")}</select>`)}
    ${field("Workflow Name", `<input value="${edit ? "Quality Docs Approval" : "HSE Reports Approval"}">`)}
    ${field("Approver 1", peoplePicker([edit ? "Ahmed Khan" : "Sara Ali"]))}
    ${field("Approver 2", peoplePicker(["John Doe"]))}
  </div>`;
}

function departmentFields(edit = false) {
  return `<div class="settings-form-grid">
    ${field("Document Area", `<select>${options(settingsSelects.areas, edit ? "Project" : "Company Records")}</select>`)}
    ${field("Department Name", `<input value="${edit ? "Technical" : "Procurement"}">`)}
  </div>`;
}

function adminFields(edit = false) {
  return `<div class="settings-form-grid">
    ${field("User", peoplePicker([edit ? "Fatima Noor" : "Mohammed Raza"]))}
    ${field("Status", `<select>${options(["Active", "Inactive"])}</select>`)}
  </div>
  <section class="settings-dialog-section">
    <h3>Settings Access</h3>
    <div class="check-grid">
      <label><input type="checkbox" checked> Roles & Access</label>
      <label><input type="checkbox" checked> Project Creation</label>
      <label><input type="checkbox"${edit ? "" : " checked"}> Workflow Management</label>
      <label><input type="checkbox"${edit ? "" : " checked"}> Folder Structure</label>
      <label><input type="checkbox"> Department Management</label>
      <label><input type="checkbox"> Admin Users</label>
    </div>
  </section>`;
}

function init() {
  hydrateIcons();
  renderMiniApprovals();
  renderKanban();
  renderTree("generalTree", trees.general);
  renderTree("projectTree", trees.projects);
  renderTable("recentTable", documents.slice(0, 5), "recent");
  renderTable("documentsTable", documents.slice(0, 9));
  renderTable("projectTable", documents.filter(d => d.project === "Project_001").slice(0, 9));
  setUploadPath("Projects > Project_001 > Quality > Inspection & Test Plan");
  renderSearchResults();
  updateReportKpis();
  document.getElementById("documentCount").textContent = "Showing 1 to 9 of 9 items";
  hydrateIcons();

  document.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    const viewLink = event.target.closest("[data-view-link]");
    const action = event.target.closest("[data-action]");
    const actionName = action?.dataset.action;
    const row = event.target.closest("tr[data-doc]");
    const folder = event.target.closest("[data-folder]");
    if (!event.target.closest("#globalSearchMenu")) closeGlobalSearch();
    if (!event.target.closest("#rowActionMenu") && actionName !== "row-menu") closeRowMenu();
    if (viewButton) showView(viewButton.dataset.view);
    if (viewLink) showView(viewLink.dataset.viewLink);
    if (folder) {
      const isGeneralTree = Boolean(folder.closest("#generalTree"));
      const isProjectTree = Boolean(folder.closest("#projectTree"));
      const isBrowserTree = Boolean(folder.closest("#folderBrowserTree"));
      const treeRoot = isGeneralTree ? trees.general : isProjectTree ? trees.projects : isBrowserTree ? folderBrowserRoot : null;
      const treeNode = treeRoot ? findTreeNode(treeRoot, folder.dataset.path) : null;
      if (treeRoot) markTreeActive(treeRoot, folder.dataset.path);
      if (folder.dataset.hasChildren === "true" && treeNode) {
        treeNode.open = !treeNode.open;
        if (isGeneralTree) renderTree("generalTree", trees.general);
        if (isProjectTree) renderTree("projectTree", trees.projects);
        if (isBrowserTree) renderFolderBrowser();
      }
      if (!folder.dataset.hasChildren || folder.dataset.hasChildren === "false") {
        if (isGeneralTree) renderTree("generalTree", trees.general);
        if (isProjectTree) renderTree("projectTree", trees.projects);
        if (isBrowserTree) renderFolderBrowser();
      }
      hydrateIcons(folder.closest(".folder-tree, .folder-browser-tree") || document);
      if (isGeneralTree) {
        document.getElementById("folderName").textContent = folder.dataset.folder;
        document.getElementById("docCrumbs").innerHTML = folder.dataset.path.split(" > ").join(` ${icon("chevron-right")} `);
        hydrateIcons(document.getElementById("docCrumbs"));
      }
      if (isProjectTree) {
        const parts = folder.dataset.path.split(" > ");
        const projectName = parts.find(part => /^Project_\d+/.test(part)) || "Project_001";
        const folderName = folder.dataset.folder === projectName ? projectName : `${projectName} - ${folder.dataset.folder}`;
        document.getElementById("projectFolderName").textContent = folderName;
        document.getElementById("projectFolderHint").textContent = `You are viewing ${folder.dataset.path}.`;
        document.getElementById("projectCrumbs").innerHTML = parts.join(` ${icon("chevron-right")} `);
        hydrateIcons(document.getElementById("projectCrumbs"));
      }
    }
    if (row && actionName !== "row-menu" && !event.target.closest("#rowActionMenu")) {
      openDocumentDetailsFromAnyView(row);
    }
    const layoutButton = event.target.closest("[data-layout]");
    if (layoutButton) {
      const tableCard = layoutButton.closest(".workspace, .view")?.querySelector(".table-card");
      layoutButton.parentElement.querySelectorAll("[data-layout]").forEach(btn => btn.classList.remove("active"));
      layoutButton.classList.add("active");
      tableCard?.classList.toggle("grid-mode", layoutButton.dataset.layout === "grid");
      tableCard?.classList.toggle("list-mode", layoutButton.dataset.layout === "list");
    }
    if (!action) return;
    const name = actionName;
    if (name === "open-upload") {
      const source = action.closest("#view-documents") ? "documents" : action.closest("#view-projects") ? "projects" : "home";
      prepareUploadDialog(source);
    }
    if (name === "row-menu") {
      const menuRow = action.closest("tr[data-doc]");
      if (menuRow) openRowMenu(action, documents[Number(menuRow.dataset.doc)]);
    }
    if (name === "toggle-bookmark-filters") document.getElementById("bookmarkFilters")?.classList.toggle("open");
    if (name === "toggle-search-filters") document.getElementById("searchFilters").classList.toggle("open");
    if (name?.startsWith("settings-")) {
      if (name === "settings-save" || name === "settings-sync-folders") {
        toast(name === "settings-sync-folders" ? "Folder structure synced" : "Settings saved");
      } else {
        openSettingsDialog(name);
      }
    }
    if (name?.startsWith("reports-")) {
      updateReportKpis();
      toast("Report refreshed");
    }
    if (name === "contact-admin") document.getElementById("contactAdminDialog").showModal();
    if (name === "open-guide") document.getElementById("guideDialog").showModal();
    if (name === "open-folder-browser") {
      folderBrowserRoot = currentUploadRoot();
      renderFolderBrowser();
      document.getElementById("folderBrowserDialog").showModal();
    }
    if (name === "toggle-filters") action.closest(".workspace")?.querySelector(".filters-row")?.classList.toggle("open");
    if (name === "refresh") toast("Folder refreshed");
    if (name === "download") toast("Download started");
    if (name === "close-details") closeDetails(action.closest(".details-panel"));
    if (name === "share") openShareDialog(selectedDocument);
    if (name === "version-history") {
      renderVersionHistory(selectedDocument);
      document.getElementById("versionDialog").showModal();
    }
    if (name === "approve") {
      const item = approvals[Number(action.dataset.approvalId)] || approvals[0];
      openApproveDialog(item);
    }
    if (name === "reject-approval") {
      openRejectDialog(approvals[Number(action.dataset.approvalId)] || approvals[0]);
    }
    if (name === "bulk-approve") toast("Selected approvals marked approved");
    if (name === "preview-approval") {
      renderPreview(approvals[Number(action.dataset.approvalId)] || approvals[0]);
      document.getElementById("previewDialog").showModal();
    }
    if (name === "preview") {
      renderDocumentPreview(selectedDocument);
      document.getElementById("previewDialog").showModal();
    }
  });

  ["folderSearch", "statusFilter", "typeFilter", "projectFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", applyFilters);
  });
  ["bookmarkSearch", "bookmarkStatusFilter", "bookmarkTypeFilter", "bookmarkProjectFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", renderBookmarks);
  });
  ["searchStatusFilter", "searchTypeFilter", "searchProjectFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", renderSearchResults);
  });
  ["reportAreaFilter", "reportProjectFilter", "reportDepartmentFilter", "reportStatusFilter", "reportPeriodFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", id === "reportAreaFilter" ? syncReportFilters : updateReportKpis);
      el.addEventListener("change", id === "reportAreaFilter" ? syncReportFilters : updateReportKpis);
    }
  });
  document.querySelectorAll("[data-tree-search]").forEach(input => {
    input.addEventListener("input", () => {
      const tree = document.getElementById(input.dataset.treeSearch);
      const query = input.value.trim().toLowerCase();
      tree?.querySelectorAll(".tree-node").forEach(node => {
        node.classList.toggle("hidden", query && !node.dataset.path.toLowerCase().includes(query));
      });
    });
  });
  document.querySelectorAll("[data-settings-tab]").forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.settingsTab;
      document.querySelectorAll(".settings-tab").forEach(item => item.classList.toggle("active", item === tab));
      document.querySelectorAll(".settings-panel").forEach(panel => panel.classList.toggle("active", panel.id === `settings-${target}`));
    });
  });
  document.querySelectorAll("[data-folder-tab]").forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.folderTab;
      document.querySelectorAll("[data-folder-tab]").forEach(item => item.classList.toggle("active", item === tab));
      document.querySelectorAll(".folder-structure-panel").forEach(panel => panel.classList.toggle("active", panel.id === `folder-structure-${target}`));
    });
  });
  document.getElementById("globalSearch").addEventListener("input", event => {
    document.getElementById("clearSearch").classList.toggle("visible", Boolean(event.target.value));
  });
  document.getElementById("globalSearch").addEventListener("keydown", event => {
    if (event.key === "Enter" && event.target.value.trim()) {
      event.preventDefault();
      renderSearchResults();
      showView("search");
      closeGlobalSearch();
    }
  });
  document.getElementById("clearSearch").addEventListener("click", () => {
    document.getElementById("globalSearch").value = "";
    document.getElementById("clearSearch").classList.remove("visible");
    renderSearchResults();
    document.getElementById("globalSearch").focus();
  });
  document.getElementById("globalSearchToggle")?.addEventListener("click", event => {
    event.stopPropagation();
    const menu = document.getElementById("globalSearchMenu");
    menu.classList.contains("open") ? closeGlobalSearch() : openGlobalSearch();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeGlobalSearch();
  });
  document.getElementById("sidebarToggleTop").addEventListener("click", () => setSidebarState(document.querySelector(".app-shell").dataset.sidebar === "open" ? "closed" : "open"));
  document.getElementById("mobileMenu").addEventListener("click", () => document.querySelector(".app-shell").classList.toggle("mobile-open"));
  document.getElementById("submitUpload").addEventListener("click", () => toast("Document submitted for approval"));
  document.getElementById("clearFavorites")?.addEventListener("click", () => {
    documents.forEach(doc => { doc.favorite = false; });
    renderBookmarks();
    renderSearchResults();
    toast("Bookmarks cleared");
  });
  document.getElementById("copyShareLink").addEventListener("click", () => {
    const input = document.getElementById("shareLink");
    input.select();
    navigator.clipboard?.writeText(input.value).catch(() => {});
    toast(`Share link copied for ${document.getElementById("shareEmployee").value || "employee"}`);
  });
  document.getElementById("submitReject").addEventListener("click", event => {
    const comment = document.getElementById("rejectComment").value.trim();
    if (!comment) {
      event.preventDefault();
      toast("Please enter rejection comments");
      return;
    }
    toast(`${pendingRejection?.reference || "Document"} rejected with comments`);
  });
  document.getElementById("submitApprove").addEventListener("click", () => {
    const comment = document.getElementById("approveComment").value.trim();
    toast(comment ? `${pendingApproval?.reference || "Document"} approved with comments` : `${pendingApproval?.reference || "Document"} approved`);
  });
  document.getElementById("settingsDialogSave").addEventListener("click", () => toast("Settings record saved"));
  document.getElementById("applyFolderPath").addEventListener("click", () => {
    const active = document.querySelector("#folderBrowserTree .tree-node.active");
    if (active) setUploadPath(active.dataset.path);
  });
  document.getElementById("uploadProjectSelect").addEventListener("change", event => {
    setUploadPath(`Projects > ${event.target.value} > Quality > Inspection & Test Plan`);
    folderBrowserRoot = null;
  });
  document.getElementById("approvalRequired").addEventListener("change", event => {
    const enabled = event.target.checked;
    document.getElementById("approvalRequiredLabel").textContent = enabled ? "Yes" : "No";
    document.getElementById("approverSection").classList.toggle("hidden", !enabled);
  });
  document.querySelectorAll('input[name="dept"]').forEach(radio => radio.addEventListener("change", event => {
    const isCompany = event.target.value === "Company";
    document.getElementById("projectSelectField").classList.toggle("hidden", isCompany);
    setUploadPath(isCompany ? "Company > Quality > Inspection & Test Plans" : `Projects > ${document.getElementById("uploadProjectSelect").value} > Quality > Inspection & Test Plan`);
    folderBrowserRoot = null;
  }));
  document.getElementById("projectSearch").addEventListener("input", event => {
    const query = event.target.value.toLowerCase();
    const rows = documents.filter(doc => doc.project === "Project_001" && Object.values(doc).join(" ").toLowerCase().includes(query));
    renderTable("projectTable", rows);
    hydrateIcons(document.getElementById("projectTable"));
  });
}

init();
