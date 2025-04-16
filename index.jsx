import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EPortfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      {/* Home Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Akkhor Binnas Barua</h1>
        <p className="text-lg">Web Developer | Software Engineer | Problem Solver</p>
        <img src="https://via.placeholder.com/150" alt="Your photo" className="mx-auto rounded-full w-36 h-36 object-cover" />
      </section>

      {/* About Me */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <Card>
          <CardContent className="p-4">
            <p>
              I'm a hardworking, confident, and dynamic software engineer with a passion
              for developing modern web applications. With a strong academic background
              (CGPA 3.89 from AIUB) and hands-on experience in full-stack development,
              I enjoy tackling complex challenges and continuously upgrading my skills.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Bank Management System</h3><p>HTML, CSS, PHP, JavaScript & MySQL</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Transport Management System</h3><p>Laravel, MySQL, HTML, CSS, PHP</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Fake Review Identification</h3><p>PHP, OOP Design Patterns</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Job Posting Platform</h3><p>PHP, OOP Design</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-bold">Content Management System</h3><p>JavaScript, Python, HTML & CSS</p></CardContent></Card>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Frontend: HTML5, CSS3, JavaScript, Bootstrap, React, Vue.js, Angular</li>
          <li>Backend: PHP, Node.js, Laravel</li>
          <li>Databases: MySQL</li>
          <li>Tools: Git, AWS, Ajax</li>
          <li>Languages: C, C++, Java, Python</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <Card>
          <CardContent className="p-4 space-y-2">
            <p><strong>Email:</strong> akkhor2003@gmail.com</p>
            <p><strong>Phone:</strong> 01817776996</p>
            <p><strong>Address:</strong> Basundhara R/A, Dhaka</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
