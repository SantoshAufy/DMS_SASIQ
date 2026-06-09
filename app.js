const icons = {
  home: '<path d="m3 10.5 9-8 9 8"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-7h6v7"/>',
  "badge-check": '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v6h6"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.88 1.18 6.88L12 17.77l-6.18 3.26L7 14.15 2 9.27l6.91-1.01Z"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
  "circle-help": '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"/><path d="M12 17h.01"/>',
  "chevrons-left": '<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  menu: '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M2 12h20"/>',
  filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54Z"/>',
  "layout-grid": '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
  "refresh-cw": '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  "folder-open": '<path d="m6 14 1.5-3h14l-3 7a2 2 0 0 1-1.84 1.2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v3"/>',
  "cloud-upload": '<path d="M12 13v8"/><path d="m8 17 4-4 4 4"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/><path d="M16 16h6"/>',
  trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m16 6-4-4-4 4"/><path d="M12 2v13"/>',
  "more-vertical": '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>'
};

const legacyIcons = {
  home: "⌂",
  "badge-check": "✓",
  "file-text": "□",
  "project-box": "▦",
  folder: "📁",
  star: "★",
  settings: "⚙",
  "circle-help": "?",
  "chevrons-left": "«",
  "arrow-left": "←",
  search: "⌕",
  "chevron-down": "⌄",
  "chevron-right": "›",
  "chevron-left": "‹",
  "arrow-right": "→",
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
    location: "General Documents > Admin > SOP",
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
    location: "General Documents > Legal > Agreements",
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
  return `<span class="file-name">${favorite ? '<span style="color:#f8a51b">' + icon("star") + '</span>' : ""}<span class="file-icon ${doc.ext}">${doc.ext.toUpperCase().slice(0,3)}</span>${doc.name}</span>`;
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
        <td>${fileCell(doc)}</td><td><span class="status draft">${doc.project === "Project_001" ? "Project Documents" : "General Documents"}</span></td><td>${doc.type}</td><td><span class="person"><i>${doc.by.split(" ").map(s => s[0]).join("")}</i>${doc.by}</span></td><td>${doc.id ? "Today, 9:30 AM" : "2 hrs ago"}</td><td><span class="status ${statusClass(doc.status)}">${doc.status}</span></td><td><button class="kebab" data-action="row-menu">${icon("more-vertical")}</button></td>
      </tr>` : `
      <tr data-doc="${doc.id}">
        <td>${fileCell(doc, mode === "favorites")}</td><td>${doc.project}</td><td>${doc.ref}</td><td>${doc.subject}</td><td>${doc.type}</td><td>${doc.rev}</td><td><span class="status ${statusClass(doc.status)}">${doc.status}</span></td><td>${doc.date}</td><td>${doc.by}</td><td>${doc.size}</td><td><button class="kebab" data-action="row-menu">${icon("more-vertical")}</button></td>
      </tr>`).join("")
  }</tbody>`;
}

function renderMiniApprovals() {
  document.getElementById("pendingApprovals").innerHTML = `
    <div class="approval-head-mini"><span>Document</span><span>Status</span><span>Uploaded By</span></div>
  ` + approvals.map(item => `
    <div class="approval-row">
      <span class="file-icon ${item.ext}">${item.ext.toUpperCase()}</span>
      <span><b>${item.title}</b><small>${item.reference}</small></span>
      <span class="status review approval-status">${item.stage}</span>
      <span class="person"><i>${item.initials}</i>${item.uploadedBy}</span>
    </div>`).join("") + `<button class="link-button" data-view-link="approvals">View all approvals ${icon("arrow-right")}</button>`;
}

function renderKanban() {
  const buckets = ["approvalCol1", "approvalCol2", "approvalCol3"];
  approvals.forEach((item, index) => {
    document.getElementById(buckets[index % 3]).innerHTML += `
      <article class="approval-card">
        <span class="file-name"><span class="file-icon ${item.ext}">${item.ext.toUpperCase()}</span>${item.title}</span>
        <small>${item.reference} | Uploaded by ${item.uploadedBy}</small>
        <span class="status review">${item.stage}</span>
        <div class="approval-actions"><button class="btn ghost" data-action="preview-approval" data-approval-id="${item.id}">Preview</button><button class="btn primary" data-action="approve">Approve</button></div>
      </article>`;
  });
}

function renderTree(id, items) {
  const walk = (nodes, level = 0, parents = []) => nodes.map(item => {
    const hasChildren = item.children && item.children.length;
    const path = [...parents, item.label].join(" > ");
    const childHtml = hasChildren && item.open ? walk(item.children, level + 1, [...parents, item.label]) : "";
    return `
      <button class="tree-node indent-${Math.min(level, 5)} ${item.active ? "active" : ""}" data-folder="${item.label}" data-path="${path}" data-has-children="${hasChildren ? "true" : "false"}">
        <span>${hasChildren ? icon(item.open ? "chevron-down" : "chevron-right") : ""}</span>${icon("folder")}<span>${item.label}</span>
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
  container.innerHTML = `${path.split(" > ").join(` ${icon("chevron-right")} `)} <button type="button" class="btn outline-accent small" data-action="open-folder-browser"><span data-icon="folder-open"></span>Browse</button>`;
  hydrateIcons(container);
}

function renderBookmarks() {
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

function renderDetails(targetId, doc = documents[0]) {
  document.getElementById(targetId).innerHTML = `
    <div class="details-header"><h2>Document Details</h2><button class="icon-button" data-action="close-details">${icon("x")}</button></div>
    <div class="details-card">
      <h3>File Information</h3>
      <div class="detail-row"><span>Document</span><b>${doc.name}</b></div>
      <div class="detail-row"><span>Status</span><span class="status ${statusClass(doc.status)}">${doc.status}</span></div>
      <div class="detail-row"><span>Reference Number</span><b>${doc.ref}</b></div>
      <div class="detail-row"><span>Revision</span><b>${doc.rev}</b></div>
      <div class="detail-row"><span>Subject / Title</span><b>${doc.subject}</b></div>
      <div class="detail-row"><span>Document Type</span><b>${doc.type}</b></div>
      <div class="detail-row"><span>Project</span><b>${doc.project}</b></div>
      <div class="detail-row"><span>Confidentiality</span><span class="status draft">Internal Use</span></div>
      <div class="detail-row"><span>Uploaded By</span><b>${doc.by}</b></div>
    </div>
    <div class="details-card">
      <h3>Approval Details</h3>
      <div class="detail-row"><span>Workflow</span><b>${doc.type === "Inspection Plan" ? "Quality Docs Approval" : "Project Documents Approval"}</b></div>
      <div class="detail-row"><span>Current Stage</span><b>${doc.status === "Approved" ? "Final Approval" : "Manager Review"}</b></div>
      <div class="detail-row"><span>Due Date</span><b>22 May 2024</b></div>
      <div class="detail-row"><span>Approved By</span><b>Ahmed Khan</b></div>
    </div>
    <div class="detail-actions">
      <button class="btn ghost" data-action="download">${icon("download")}Download</button>
      <button class="btn ghost" data-action="preview">${icon("eye")}Preview</button>
      <button class="btn ghost" data-action="add-favorite">${icon("star")}Bookmark</button>
      <button class="btn ghost" data-action="share">${icon("share")}Share</button>
    </div>`;
}

function openDetails(panelId, doc) {
  selectedDocument = doc;
  const panel = document.getElementById(panelId);
  renderDetails(panelId, doc);
  hydrateIcons(panel);
  panel.classList.add("open");
  panel.closest(".split-layout")?.classList.add("details-open");
}

function closeDetails(panel) {
  const detailsPanel = panel || document.querySelector(".details-panel.open");
  if (!detailsPanel) return;
  detailsPanel.classList.remove("open");
  detailsPanel.closest(".split-layout")?.classList.remove("details-open");
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

function applyFilters() {
  const q = (document.getElementById("folderSearch")?.value || document.getElementById("globalSearch").value || "").toLowerCase();
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
  document.querySelectorAll(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.view === view));
  document.querySelector(".app-shell").classList.remove("mobile-open");
}

function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
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
  renderBookmarks();
  document.getElementById("documentCount").textContent = "Showing 1 to 9 of 9 items";
  hydrateIcons();

  document.addEventListener("click", event => {
    const viewButton = event.target.closest("[data-view]");
    const viewLink = event.target.closest("[data-view-link]");
    const action = event.target.closest("[data-action]");
    const row = event.target.closest("tr[data-doc]");
    const folder = event.target.closest("[data-folder]");
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
      if (!isBrowserTree) document.getElementById("folderName").textContent = folder.dataset.folder;
      if (isGeneralTree) {
        document.getElementById("docCrumbs").innerHTML = folder.dataset.path.split(" > ").join(` ${icon("chevron-right")} `);
        hydrateIcons(document.getElementById("docCrumbs"));
      }
    }
    if (row && row.closest("#view-documents, #view-projects")) {
      const doc = documents[Number(row.dataset.doc)];
      const panelId = row.closest("#view-projects") ? "projectDetails" : "detailsPanel";
      openDetails(panelId, doc);
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
    const name = action.dataset.action;
    if (name === "open-upload") document.getElementById("uploadDialog").showModal();
    if (name === "toggle-bookmark-filters") document.getElementById("bookmarkFilters").classList.toggle("open");
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
    if (name === "add-favorite") {
      selectedDocument.favorite = true;
      renderBookmarks();
      toast("Document added to Bookmark");
    }
    if (name === "approve") toast("Document approved");
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
  document.getElementById("globalSearch").addEventListener("input", event => {
    document.getElementById("clearSearch").classList.toggle("visible", Boolean(event.target.value));
    if (event.target.value.trim()) showView("documents");
    applyFilters();
  });
  document.getElementById("clearSearch").addEventListener("click", () => {
    document.getElementById("globalSearch").value = "";
    document.getElementById("clearSearch").classList.remove("visible");
    applyFilters();
  });
  document.getElementById("sidebarToggleTop").addEventListener("click", () => document.querySelector(".app-shell").dataset.sidebar = document.querySelector(".app-shell").dataset.sidebar === "open" ? "closed" : "open");
  document.getElementById("sidebarToggleBottom").addEventListener("click", () => document.querySelector(".app-shell").dataset.sidebar = document.querySelector(".app-shell").dataset.sidebar === "open" ? "closed" : "open");
  document.getElementById("mobileMenu").addEventListener("click", () => document.querySelector(".app-shell").classList.toggle("mobile-open"));
  document.getElementById("submitUpload").addEventListener("click", () => toast("Document submitted for approval"));
  document.getElementById("clearFavorites").addEventListener("click", () => {
    documents.forEach(doc => { doc.favorite = false; });
    renderBookmarks();
    toast("Bookmarks cleared");
  });
  document.getElementById("copyShareLink").addEventListener("click", () => {
    const input = document.getElementById("shareLink");
    input.select();
    navigator.clipboard?.writeText(input.value).catch(() => {});
    toast(`Share link copied for ${document.getElementById("shareEmployee").value || "employee"}`);
  });
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
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      document.getElementById("globalSearch").focus();
    }
  });
}

init();
