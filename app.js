window.addEventListener('load', () => {
  // Get DOM Elements
  copyBtn = document.getElementById('copy-btn')
  generateBtn = document.getElementById('generate-btn')
  output = document.getElementById('output')


  // Add Event Listeners
  copyBtn.addEventListener('click', copy)
  generateBtn.addEventListener('click', formatOutput)
})

// Actions
function formatOutput(e) {
  e.preventDefault()

  firstName = document.getElementById('name')
  let qualities = getAllCheckboxes()
  let comment = `Congratulations ${firstName} for completing the course. You were great at ${qualities[0]} and ${qualities[1]}.`
  output.value = comment
}

function getCollegeRecommendation() {
  return recommendation
}

function getAllCheckboxes() {
  let checkboxes = document.querySelectorAll('input')
  qualities = []

  for (let index = 0; index < checkboxes.length; index++) {
    let checkbox = checkboxes[index]
    if (checkbox.checked) {
      qualities.push(checkbox.value)
    }
  }
  return qualities
}

function copy() {
    /* Select the text field */
    output.select()
    output.setSelectionRange(0, 99999) /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand('copy')

    /* Alert the copied text */
    alert('Copied the text: ' + output.value)

    /* Clear the output */
    output.value = ""
  }
