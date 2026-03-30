import { 
  LayoutDashboard, 
  Target, 
  Folder, 
  Columns, 
  Briefcase, 
  BarChart, 
  Search, 
  Bell, 
  LogOut, 
  ChevronDown, 
  AlertTriangle, 
  Calendar, 
  Plus 
} from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-line">
            <div className="logo-icon">E</div>
            <div className="logo-text-group">
              <h1>Elux Workspace</h1>
              <p>Member</p>
            </div>
          </div>
          
          <div className="search-bar">
            <Search size={14} color="#64748B" />
            <input type="text" placeholder="Search.." />
            <span className="search-shortcut">⌘K</span>
          </div>

          <nav className="nav">
            <a href="#" className="nav-item">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </a>
            <a href="#" className="nav-item">
              <Target size={20} />
              <span>Goals</span>
            </a>
            <a href="#" className="nav-item active">
              <Folder size={20} />
              <span>Epics</span>
            </a>
            <a href="#" className="nav-item">
              <Columns size={20} />
              <span>Board</span>
            </a>
            <a href="#" className="nav-item">
              <Briefcase size={20} />
              <span>My Work</span>
            </a>
            <a href="#" className="nav-item">
              <BarChart size={20} />
              <span>Team Workload</span>
            </a>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="avatar">AH</div>
          <div className="profile-info">
            <div className="profile-name">Ahrasya</div>
            <div className="profile-status">Member</div>
          </div>
          <div className="profile-actions">
            <div style={{ position: 'relative' }}>
              <Bell size={20} />
              <div style={{ 
                position: 'absolute', 
                top: -2, right: -4, 
                width: 14, height: 14, 
                backgroundColor: '#EF4444', 
                borderRadius: '50%', 
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                color: 'white', fontSize: 10, fontWeight: 'bold'
              }}>6</div>
            </div>
            <LogOut size={20} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="breadcrumbs">
          <span>Epics</span>
          <span>&gt;</span>
          <span>Project - MellowArt</span>
          <span>&gt;</span>
          <span className="active">Homepage Iteration</span>
        </div>

        {/* Header Card */}
        <div className="card">
          <div className="header-row">
            <div className="title-group">
              <h2>Homepage Iteration</h2>
              <div className="badge-delayed">
                <AlertTriangle size={14} />
                <span>Delayed</span>
              </div>
            </div>
            <button className="btn-review">
              <span>Review</span>
              <ChevronDown size={14} color="#64748B" />
            </button>
          </div>

          <div className="review-status">Review</div>

          <div className="fields-grid">
            <div className="field">
              <span className="field-label">ASSIGNEE</span>
              <div className="assignee-badge">
                <div className="avatar" style={{ width: 20, height: 20, fontSize: 10 }}>AH</div>
                <span>Ahrasya</span>
                <ChevronDown size={14} color="#64748B" />
              </div>
            </div>

            <div className="field">
              <span className="field-label">PRIORITY</span>
              <div className="priority-badge">
                <div className="dot" />
                <span>High</span>
              </div>
            </div>

            <div className="field">
              <span className="field-label">DUE DATE</span>
              <div className="date-value">
                <Calendar size={16} color="#64748B" />
                <span>2026-03-17</span>
              </div>
            </div>

            <div className="field">
              <span className="field-label">START DATE</span>
              <div className="date-value">
                <Calendar size={16} color="#64748B" />
                <span>2026-03-04</span>
              </div>
            </div>
          </div>

          <div className="field">
            <span className="field-label">EPIC</span>
            <div className="epic-badge">Project - MellowArt</div>
          </div>
        </div>

        {/* Description Card */}
        <div className="card description-card">
          <h3 className="card-title">Description</h3>
          <p className="notion-link">https://elux.notion.site/Iteration-of-Homepage-313f65e9e88080f984b7c3aecbd12c81?source=copy_link</p>
        </div>

        {/* Subtasks Card */}
        <div className="card">
          <div className="subtasks-header">
            <h3 className="card-title">Subtasks</h3>
            <div className="subtasks-stat">
              <span className="done-text">0 / 0 done · 0%</span>
              <button className="btn-add">
                <Plus size={14} />
                <span>Add</span>
              </button>
            </div>
          </div>
          <p className="no-subtasks">No subtasks yet.</p>
        </div>

        {/* Comments Card */}
        <div className="card comments-card">
          <h3 className="card-title">Comments (1)</h3>
          <div className="comment-item">
            <div className="avatar comment-ava">L</div>
            <div className="comment-content">
              <div className="comment-name">Lintang</div>
              <p className="comment-text">Stat 25-03-2026: - masih menunggu feedback dari Alison - explore opsi font -&gt; Rasya (opsi: font existing, 2 lainnya beda) - minor spelling &amp; grammar</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
