import { useState } from "react"

function Jobs() {
 const [appliedJobs, setAppliedJobs] = useState([1, 3, 6])


  const jobs = [
    {
      id: 1,
      title: "Frontend Engineer",
      company: "Doomsheel",
      location: "Jaipur (Onsite)",
      experience: "1 - 2 years",
      salary: "Not Disclosed",
      skills: ["CSS", "JavaScript", "React.js", "Next.js"],
      appliedCount: "30+ Applied",
      posted: "Posted 4 days ago",
      appliedOn: "January 27, 2026"
    },
    {
  id: 3,
  title: "Frontend Performance Engineer",
  company: "Doomsheel",
  location: "Remote",
  experience: "2 - 4 years",
  salary: "₹10-14 LPA",
  skills: ["React", "Performance", "Lighthouse"],
  appliedCount: "11 Applied",
  posted: "Posted 1 day ago",
  appliedOn: "January 28, 2026"
},
{
  id: 4,
  title: "UI Developer (Design Systems)",
  company: "Doomsheel",
  location: "Bangalore (Onsite)",
  experience: "1 - 3 years",
  salary: "₹7-11 LPA",
  skills: ["CSS", "Storybook", "Design Systems"],
  appliedCount: "22 Applied",
  posted: "Posted 5 days ago",
  appliedOn: "January 24, 2026"
},
{
  id: 5,
  title: "React + Next.js Engineer",
  company: "Doomsheel",
  location: "Remote",
  experience: "2 - 5 years",
  salary: "₹12-16 LPA",
  skills: ["React", "Next.js", "SSR", "SEO"],
  appliedCount: "16 Applied",
  posted: "Posted 3 days ago",
  appliedOn: "January 26, 2026"
},
{
  id: 6,
  title: "Junior UI Engineer",
  company: "Doomsheel",
  location: "Jaipur (Onsite)",
  experience: "0 - 1 year",
  salary: "₹3-5 LPA",
  skills: ["HTML", "CSS", "JavaScript"],
  appliedCount: "47 Applied",
  posted: "Posted 6 days ago",
  appliedOn: "January 23, 2026"
},
{
  id: 7,
  title: "Frontend Engineer – Dashboard Apps",
  company: "Doomsheel",
  location: "Pune (Hybrid)",
  experience: "1 - 3 years",
  salary: "₹8-10 LPA",
  skills: ["React", "Charts", "UI State"],
  appliedCount: "13 Applied",
  posted: "Posted 2 days ago",
  appliedOn: "January 27, 2026"
}
,
    {
      id: 2,
      title: "React Developer",
      company: "Doomsheel",
      location: "Remote",
      experience: "0 - 1 year",
      salary: "₹6-8 LPA",
      skills: ["React", "JavaScript", "REST API"],
      appliedCount: "18 Applied",
      posted: "Posted 3 days ago",
      appliedOn: "January 26, 2026"
    },
    // baaki jobs same rakh sakte ho (id add karna bas)
  ]

  const handleApply = (id) => {
    setAppliedJobs([...appliedJobs, id])
  }

  return (
    <div className="page">
      <h2 className="page-title">Jobs</h2>
      <p className="page-subtitle">
        Jobs matched with your interview performance
      </p>

      <div className="jobs-list">
        {jobs.map((job) => {
          const isApplied = appliedJobs.includes(job.id)

          return (
            <div key={job.id} className="card job-detail-card">

              {/* HEADER */}
              <div className="job-header">
                <div>
                  <h3>{job.title}</h3>
                  <p className="card-muted">{job.company}</p>
                </div>
                <div className="org-logo">Org Logo</div>
              </div>

              {/* META */}
              <div className="job-meta">
                <span>{job.location}</span>
                <span>{job.experience}</span>
                <span>{job.salary}</span>
              </div>

              {/* SKILLS */}
              <div className="job-skills">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {/* FOOTER */}
              <div className="job-footer">
                <div className="job-stats">
                  <span className="applied-count">{job.appliedCount}</span>
                  <span className="posted">{job.posted}</span>
                </div>

                <button
                  className={`apply-btn ${isApplied ? "applied" : ""}`}
                  onClick={() => handleApply(job.id)}
                  disabled={isApplied}
                >
                  {isApplied ? "Applied" : "Apply"}
                </button>
              </div>

              {isApplied && (
                <p className="applied-date">
                  • Applied on {job.appliedOn}
                </p>
              )}

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Jobs
