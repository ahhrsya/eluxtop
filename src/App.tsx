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
  Plus,
  Diamond,
  CircleDot
} from 'lucide-react';
import './index.css';

function App() {
  const [version, setVersion] = useState<'original' | 'v1' | 'v2' | 'v3' | 'v4'>('v4');

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
          <button 
            className={`version-btn ${version === 'v3' ? 'active' : ''}`}
            onClick={() => setVersion('v3')}
          >
            Version 3
          </button>
          <button 
            className={`version-btn ${version === 'v4' ? 'active' : ''}`}
            onClick={() => setVersion('v4')}
          >
            Version 4
          </button>
        </div>

        <div className="breadcrumbs">
          <span>Epics</span>
          <span>&gt;</span>
          <span>Project - MellowArt</span>
          <span>&gt;</span>
          <span className="active">Homepage Iteration</span>
        </div>

        <div className={(version === 'v1' || version === 'v2' || version === 'v3' || version === 'v4') ? 'page-grid' : ''}>
          <div className={(version === 'v1' || version === 'v2' || version === 'v3' || version === 'v4') ? 'left-column' : ''}>
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
            <div className="description-card card" style={{ gap: 16 }}>
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

          {/* Sidebar right for V1, V2, V3, V4 */}
          {(version === 'v1' || version === 'v2' || version === 'v3' || version === 'v4') && (
            <div className="sidebar-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: (version === 'v2' || version === 'v4') ? 320 : 300 }}>
              
              {/* V4 Timeline Progress Card */}
              {version === 'v4' && (
                <div className="sidebar-right" style={{ width: '100%', gap: '16px' }}>
                  <span className="field-label">TIMELINE PROGRESS</span>
                  <div className="timeline-bar-container">
                    <div className="timeline-segment planned" style={{ width: '50%' }}></div>
                    <div className="timeline-segment overdue" style={{ width: '50%' }}></div>
                    <div className="timeline-marker start" title="Mar 4"></div>
                    <div className="timeline-marker due" style={{ left: '50%' }} title="Mar 17"></div>
                    <div className="timeline-marker today" style={{ left: '100%' }} title="Mar 30"></div>
                  </div>
                  <div className="stats-row">
                    <div className="stat-item">
                      <span className="stat-val">26d</span>
                      <span className="stat-lbl">elapsed</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-val overdue-text">13d</span>
                      <span className="stat-lbl overdue-text">overdue</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-val planned-text">13d</span>
                      <span className="stat-lbl planned-text">planned</span>
                    </div>
                  </div>
                </div>
              )}

              {/* V4 Activity Log Card */}
              {version === 'v4' && (
                <div className="sidebar-right" style={{ width: '100%', gap: '16px' }}>
                  <span className="field-label">ACTIVITY LOG</span>
                  <div className="activity-timeline">
                    {[
                      { time: '5d ago', dot: 'green', text: 'Lintang commented: status update...' },
                      { time: '12d ago', dot: 'blue', text: 'Status changed: In Progress → Review' },
                      { time: '14d ago', dot: 'gray', text: 'Ahrasya updated description' },
                      { time: '20d ago', dot: 'blue', text: 'Status changed: To Do → In Progress' },
                      { time: '26d ago', dot: 'gray', text: 'Task created by Lintang' }
                    ].map((entry, idx) => (
                      <div key={idx} className="activity-entry">
                        <span className="activity-time">{entry.time}</span>
                        <div className={`activity-dot ${entry.dot}`}></div>
                        <span className="activity-text" title={entry.text}>{entry.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Properties Card (V1, V2, V3) */}
              {(version === 'v1' || version === 'v2' || version === 'v3') && (
                <div className="sidebar-right" style={{ width: '100%', gap: version === 'v3' ? '16px' : '24px' }}>
                  <div className="sidebar-field">
                    <span className="field-label">LABELS</span>
                    <div className="pills-row">
                      <span className="pill pill-design">Design</span>
                      <span className="pill pill-homepage">Homepage</span>
                    </div>
                  </div>

                  <div className="sidebar-field" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="field-label" style={{ marginBottom: 0 }}>ESTIMATE</span>
                    <div className="sidebar-value">
                      <Diamond size={16} color="#64748B" />
                      <span>{version === 'v1' ? '3' : version === 'v2' ? '5' : '3'} points</span>
                    </div>
                  </div>

                  {version === 'v2' && (
                    <div className="status-banner">
                      <span>⏳ Waiting feedback — Alison</span>
                    </div>
                  )}

                  {version === 'v3' && (
                    <div className="sidebar-field" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="field-label" style={{ marginBottom: 0 }}>REVIEWER</span>
                      <div className="reviewer-badge" style={{ padding: 0, border: 'none' }}>
                        <div className="avatar" style={{ width: 18, height: 18, fontSize: 9, backgroundColor: '#3b82f6' }}>A</div>
                        <span style={{ fontSize: 13 }}>Alison</span>
                      </div>
                    </div>
                  )}

                  <div className="sidebar-field" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="field-label" style={{ marginBottom: 0 }}>CYCLE</span>
                    <div className="sidebar-value">
                      <CircleDot size={16} color="#64748B" />
                      <span>Sprint 12 {version === 'v2' && '· Mar 2 – Mar 16'}</span>
                    </div>
                  </div>
                  {version === 'v2' && (
                    <div className="progress-container">
                      <div className="progress-fill" style={{ width: '60%' }}></div>
                    </div>
                  )}
                </div>
              )}

              {/* Dependencies & Next Action for V3 */}
              {version === 'v3' && (
                <>
                  <div className="sidebar-right card-accent-amber" style={{ width: '100%', gap: '8px' }}>
                    <span className="field-label">DEPENDENCIES</span>
                    <div className="sidebar-item-box amber-accent">
                      <span style={{ fontSize: 13, fontWeight: 500 }}>🔗 Awaiting Alison feedback</span>
                    </div>
                  </div>
                  <div className="sidebar-right card-accent-blue" style={{ width: '100%', gap: '8px' }}>
                    <span className="field-label">NEXT ACTION</span>
                    <div className="sidebar-item-box blue-accent" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                      <span style={{ fontSize: 13, fontWeight: 600 }}>Font Exploration → Rasya</span>
                      <span style={{ fontSize: 11, color: '#64748B' }}>(existing font + 2 alternatives)</span>
                    </div>
                  </div>
                </>
              )}

              {/* Original Reviewer field for V1 */}
              {version === 'v1' && (
                <div className="sidebar-field" style={{ marginTop: 'auto' }}>
                  <span className="field-label">REVIEWER</span>
                  <div className="reviewer-badge">
                    <div className="avatar" style={{ width: 20, height: 20, fontSize: 10, backgroundColor: '#3b82f6' }}>A</div>
                    <span>Alison</span>
                  </div>
                </div>
              )}

              {version === 'v2' && (
                <div className="sidebar-field">
                  <span className="field-label">MILESTONE</span>
                  <div className="sidebar-value">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                    <span>v2 Homepage Launch</span>
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
