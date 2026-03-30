import { useState } from 'react';
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
  const [version, setVersion] = useState<'original' | 'v1' | 'v2'>('original'); // Back to original start
  const [isLogExpanded, setIsLogExpanded] = useState(false);
  const [backlogs, setBacklogs] = useState([
    'Brand guidelines not yet finalized',
    'Legacy API instability in staging environment',
    'Waiting for approval on color palette v2'
  ]);
  const [newBacklog, setNewBacklog] = useState('');

  const addBacklog = () => {
    if (newBacklog.trim()) {
      setBacklogs([newBacklog, ...backlogs]);
      setNewBacklog('');
    }
  };

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
      <main className={`main-content ${version === 'original' ? 'original-layout' : ''}`}>
        <div className="version-switcher">
          <button 
            className={`version-btn ${version === 'original' ? 'active' : ''}`}
            onClick={() => setVersion('original')}
          >
            Original
          </button>
          <button 
            className={`version-btn ${version === 'v1' ? 'active' : ''}`}
            onClick={() => setVersion('v1')}
          >
            Version 1
          </button>
          <button 
            className={`version-btn ${version === 'v2' ? 'active' : ''}`}
            onClick={() => setVersion('v2')}
          >
            Version 2
          </button>
        </div>

        <div className="breadcrumbs">
          <span>Epics</span>
          <span>&gt;</span>
          <span>Project - MellowArt</span>
          <span>&gt;</span>
          <span className="active">Homepage Iteration</span>
        </div>

        <div className={(version === 'v1' || version === 'v2') ? 'page-grid' : ''}>
          <div className={`main-cards-stack ${(version === 'v1' || version === 'v2') ? 'left-column' : ''} ${version === 'original' ? 'original-cards-gap' : ''}`}>
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
            {(version === 'original' || version === 'v2') && (
              <div className="description-card card" style={{ gap: 16 }}>
                <h3 className="card-title">Description</h3>
                <p className="notion-link">https://elux.notion.site/Iteration-of-Homepage-313f65e9e88080f984b7c3aecbd12c81?source=copy_link</p>
              </div>
            )}

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
            <div className="card" style={{ gap: 24 }}>
              <h3 className="card-title">Comments (1)</h3>
              <div className="comment-item">
                <div className="avatar" style={{ backgroundColor: '#3b82f6' }}>L</div>
                <div className="comment-content">
                  <div className="comment-name">Lintang</div>
                  <p className="comment-text">Stat 25-03-2026: - masih menunggu feedback dari Alison - explore opsi font -&gt; Rasya (opsi: font existing, 2 lainnya beda) - minor spelling &amp; grammar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar right for V1, V2 */}
          {(version === 'v1' || version === 'v2') && (
            <div className="sidebar-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: version === 'v2' ? 320 : 300 }}>
              
              {/* Card 1: Backlog for V1, V2 */}
              {version === 'v2' ? (
                <div className="sidebar-right" style={{ width: '100%', gap: '16px' }}>
                  <span className="field-label">BACKLOG & OBSTACLES</span>
                  <div className="backlog-input-group">
                    <input 
                      type="text" 
                      placeholder="Add new obstacle..." 
                      className="backlog-input"
                      value={newBacklog}
                      onChange={(e) => setNewBacklog(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addBacklog()}
                    />
                    <button className="btn-add-backlog" onClick={addBacklog}>
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="backlog-list">
                    {backlogs.map((item, idx) => (
                      <div key={idx} className="backlog-item">
                        <AlertTriangle size={12} color="#F59E0B" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (null)}
              
              {/* V1 Top Card (Removed as requested) */}

              {/* V2 Activity Log Card */}
              {version === 'v2' && (
                <div className="sidebar-right" style={{ width: '100%', gap: '16px' }}>
                  <span className="field-label">ACTIVITY LOG</span>
                  <div className="activity-timeline">
                    {(isLogExpanded 
                      ? [
                        { time: '5d ago', dot: 'green', text: 'Lintang commented: status update...' },
                        { time: '12d ago', dot: 'blue', text: 'Status changed: In Progress → Review' },
                        { time: '14d ago', dot: 'gray', text: 'Ahrasya updated description' },
                        { time: '15d ago', dot: 'blue', text: '3 subtasks added by Ahrasya' },
                        { time: '18d ago', dot: 'gray', text: 'Lintang added 2 labels: "Design", "Homepage"' },
                        { time: '20d ago', dot: 'blue', text: 'Status changed: To Do → In Progress' },
                        { time: '22d ago', dot: 'gray', text: 'Lintang added "Project - MellowArt" epic' },
                        { time: '24d ago', dot: 'blue', text: 'Due date changed: Mar 10 → Mar 17' },
                        { time: '26d ago', dot: 'gray', text: 'Task created by Lintang' }
                      ]
                      : [
                        { time: '5d ago', dot: 'green', text: 'Lintang commented: status update...' },
                        { time: '12d ago', dot: 'blue', text: 'Status changed: In Progress → Review' },
                        { time: '14d ago', dot: 'gray', text: 'Ahrasya updated description' },
                        { time: '15d ago', dot: 'blue', text: '3 subtasks added by Ahrasya' },
                        { time: '18d ago', dot: 'gray', text: 'Lintang added 2 labels: "Design", "Homepage"' }
                      ]
                    ).map((entry, idx) => (
                      <div key={idx} className="activity-entry">
                        <span className="activity-time">{entry.time}</span>
                        <div className={`activity-dot ${entry.dot}`}></div>
                        <span className="activity-text" title={entry.text}>{entry.text}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="btn-toggle-log"
                    onClick={() => setIsLogExpanded(!isLogExpanded)}
                  >
                    {isLogExpanded ? 'Show less' : `Show more (${4} more)`}
                    <ChevronDown size={14} style={{ transform: isLogExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                </div>
              )}

              {/* V1 Description Card */}
              {version === 'v1' && (
                <div className="sidebar-right" style={{ width: '100%', gap: '12px' }}>
                  <span className="field-label">DESCRIPTION</span>
                  <div className="sidebar-description-text" style={{ fontSize: 13, color: '#475569', lineHeight: 1.6 }}>
                    Refining the homepage layout based on initial feedback. Focus on typography hierarchy and CTA visibility. 
                    Integrating responsive breakpoints for tablet and mobile views. 
                    <div style={{ marginTop: 8, color: '#3b82f6', textDecoration: 'underline', cursor: 'pointer' }}>notion.so/homepage-iter...</div>
                  </div>
                </div>
              )}

              {/* V1 Backlog Card (Added below Description) */}
              {version === 'v1' && (
                <div className="sidebar-right" style={{ width: '100%', gap: '16px' }}>
                  <span className="field-label">BACKLOG & OBSTACLES</span>
                  <div className="backlog-input-group">
                    <input 
                      type="text" 
                      placeholder="Add new obstacle..." 
                      className="backlog-input"
                      value={newBacklog}
                      onChange={(e) => setNewBacklog(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addBacklog()}
                    />
                    <button className="btn-add-backlog" onClick={addBacklog}>
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="backlog-list">
                    {backlogs.map((item, idx) => (
                      <div key={idx} className="backlog-item">
                        <AlertTriangle size={12} color="#F59E0B" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
